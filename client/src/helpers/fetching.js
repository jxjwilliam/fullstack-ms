import {HEADERS, TOKEN} from "../constants";
import {pageReload} from "./utils";

/**
 * 1. local 加token，有content-type和accept
 * 2. 上传文件，加token，但没有content-type
 *  in case encType="multipart/form-data", remove "Content-Type": "application/json; charset=UTF-8",
 * 3. 代理第三方服务不加，但有content-type和accept
 * 4. 选项 isFileOrProxy: 1 文件; 2 proxy; undefined 普通fetch，等于fetchingOrig+token
 * 5. backdoor: isFileOrProxy > 2 ?
 */
export default function(url, opts = {}, isFileOrProxy) {
  let [headers, body, method='GET'] = [{}, null]

  // 代理第三方服务，比如Java App，不需要验证
  if (isFileOrProxy >= 2) headers = { ...HEADERS, ...opts.headers }
  else {
    const authToken = sessionStorage.getItem(TOKEN)
    if (!authToken) {
      console.error('权限认证失败，请先注册')
      return pageReload()
    }

    // 文件上传(isFileOrProxy===1), 不要content-type
    headers = isFileOrProxy === 1 ? {Accept: HEADERS.Accept} : HEADERS
    headers = { ...headers, ...opts.headers, 'authorization': `Bearer ${authToken}`}
  }

  if(opts.method) method = opts.method
  // need JSON.stringify (POST) ?
  if (opts.body) body = opts.body

  return fetch(url, { method, headers, body })
    .then((res) => {
      if (res.ok) return res.json()
      else {
        if (/^4\d{2}/.test(res.status)) {
          // access-token expired, 401, 403, statusText="Unauthorized"
          return pageReload()
        } else throw new Error(res.statusText)
      }
    })
    .catch((e) => console.error('操作失败: ', e.message))
}


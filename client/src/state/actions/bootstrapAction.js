import {fetching} from '../../config/utils'

// currently there are 12 api services, no need to keep into redux store.
/**
 * usage:
 *   const gs = getServices('/api/');
 *   gs('organizations'), gs('organization/1')
 */
const getServices = prefix => {
  const services = {
    'test': ['tests', 'test'],
    'admin': ['admins', 'admin'],
    'certificate': ['certificates', 'certificate'],
    'corebusiness': ['corebusinesses', 'corebusines'],
    'department': ['departments', 'department'],
    'detail': ['details', 'detail'],
    'organization': ['organizations', 'organization'],
    'profile': ['profiles', 'profile'],
    'role': ['roles', 'role'],
    'supplier': ['suppliers', 'supplier'],
    'user': ['users', 'user'],
    'status': ['statuses', 'status']
  };

  return (resource) => {
    const url = prefix + resource;
    return fetching(url);
  }
};


//~: available for both static data ('/data/address') and bootstrap data ('organizations').
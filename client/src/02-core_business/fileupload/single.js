import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { makeStyles } from '@material-ui/core/styles'
import { Snackbar, Button, IconButton, Typography, Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import {
  PhotoCamera,
  CloudUpload as CloudUploadIcon,
  Info as InfoIcon,
  HighlightOff,
  Close as CloseIcon,
  Photo as PhotoIcon,
} from '@material-ui/icons'
import { Error, Loading } from '../../components/misc'
import fetching from '../../helpers/fetching'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    // display: 'none',
  },
  button: {
    margin: theme.spacing(1),
  },
  img: {
    minWidth: 600,
    minHeight: 400,
  },
}))

const schema = yup.object().shape({
  picture: yup
    .mixed()
    .required('You need to provide a file')
    .test('fileSize', 'The file is too large', value => {
      return value && value[0].size <= 2000000
    })
    .test('type', 'We only support jpeg', value => {
      return value && value[0].type === 'image/jpeg'
    }),
})

const Info = ({ handleClose }) => (
  <>
    <Button color="secondary" size="small" onClick={handleClose}>
      UNDO
    </Button>
    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
      <CloseIcon fontSize="small" />
    </IconButton>
  </>
)

const ViewImg = ({ handleOpen }) => (
  <IconButton key="view" aria-label="view" color="inherit" onClick={handleOpen}>
    <PhotoIcon />
  </IconButton>
)

export default function () {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  })
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackMessage, setSnackMessage] = useState('File upload information')
  const handleSnackbarClick = () => setOpenSnackbar(true)
  const handleSnackbarClose = () => setOpenSnackbar(false)

  const [openDialog, setOpenDialog] = useState(false)
  const handleDialogClick = () => setOpenDialog(true)
  const handleDialogClose = () => setOpenDialog(false)

  const [imgSrc, setImgSrc] = useState('')
  const [viewImg, setViewImg] = useState(false)
  const handleChange = e => {
    try {
      const picture = e.currentTarget.files[0]
      if (picture) {
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        const img = URL.createObjectURL(picture)
        setImgSrc(img)
        setViewImg(true)
      }
    } catch (e) {
      setOpenSnackbar(true)
      setSnackMessage(e.message)
    }
  }

  // FileList, File: {lastModified, lastModifiedDate, name, size, type, webkitRelativePath}
  const onSubmit = data => {
    const file = data.picture[0]
    const formData = new FormData()
    formData.append('picture', data.picture[0])
    console.log(file, formData)

    setLoading(true)
    fetching(
      '/api/dbms/upload',
      {
        method: 'POST',
        body: formData,
      },
      1,
    )
      .then(data => console.log(data))
      .catch(err => console.error(err))
      .then(() => setLoading(false))
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={classes.root}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              ref={register}
              type="file"
              accept="image/*"
              className={classes.input}
              name="picture"
              id="picture"
              onChange={handleChange}
            />
            {errors.picture && <Error error={errors.picture.message} />}
            <label htmlFor="picture">
              <IconButton component="span" color="primary">
                <PhotoCamera />
              </IconButton>
            </label>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<CloudUploadIcon />}
              type="submit"
            >
              Upload
            </Button>
            <Button variant="contained" onClick={handleSnackbarClick} startIcon={<InfoIcon />}>
              Info
            </Button>
            {viewImg && <ViewImg handleOpen={handleDialogClick} />}
            <Snackbar
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              open={openSnackbar}
              autoHideDuration={5000}
              onClose={handleSnackbarClose}
              message="File upload information"
              action={<Info handleClose={handleSnackbarClose} />}
            />
            <Dialog maxWidth="lg" onClose={handleDialogClose} open={openDialog}>
              <DialogTitle onClose={handleDialogClose}>DialogTitle</DialogTitle>
              <DialogContent className={classes.img}>
                <Typography variant="subtitle1">Dialog</Typography>
                <img src={imgSrc} alt="single upload" />
                <IconButton onClick={handleDialogClose}>
                  <HighlightOff />
                </IconButton>
              </DialogContent>
            </Dialog>
          </form>
        </div>
      )}
    </>
  )
}

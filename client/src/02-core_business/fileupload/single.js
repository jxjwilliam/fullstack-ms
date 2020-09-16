import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, IconButton } from "@material-ui/core";
import { PhotoCamera, CloudUpload as CloudUploadIcon } from "@material-ui/icons"
import { Error } from "../../components/misc";
import fetching from "../../helpers/fetching"

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
}))

const schema = yup.object().shape({
  picture: yup
    .mixed()
    .required("You need to provide a file")
    .test("fileSize", "The file is too large", (value) => {
      return value && value[0].size <= 2000000;
    })
    .test("type", "We only support jpeg", (value) => {
      return value && value[0].type === "image/jpeg";
    }),
});

export default function () {
  const classes = useStyles()
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  })

  // FileList, File: {lastModified, lastModifiedDate, name, size, type, webkitRelativePath}
  const onSubmit = (data) => {
    const file = data.picture[0]
    const formData = new FormData()
    formData.append('picture', data.picture[0])
    console.log(file, formData);
    fetching("/api/dbms/upload", {
      method: 'POST',
      body: formData
    }, 1)
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register}
          type="file"
          accept="image/*"
          className={classes.input}
          name="picture"
          id="picture"
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
      </form>
    </div>
  )
}

import React, { useCallback } from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import FormProvider from '../../components/hook-form/FormProvider'
import { Alert, Stack, Button } from '@mui/material'
import { RHFTextField } from '../../components/hook-form'

const ProfileForm = () => {

    const ProfileSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        about: Yup.string().required("About is required"),
        avatarUrl: Yup.string().required("Avatar is required").nullable(true),
    })

    const defaultValues = {
        name: "",
        about: "",
    }

    const methods = useForm({
        resolver: yupResolver(ProfileSchema),
        defaultValues
    })

    const { reset, watch, control, setValue, setError, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = methods

    const values = watch();

    const handleDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const newFile = Object.assign(file, {
            preview: URL.createObjectURL(file)
        })


        if (file) {
            setValue("avatar", newFile, { shouldValidate: true })
        }
    }, [setValue])

    const onSubmit = async () => {
        try {

        }
        catch (error) {
            console.log(error);
            reset();
            setError("afterSubmit", {
                ...error,
                message: error.message
            })
        }
    }

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <Stack spacing={3}>
                    {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

                    <RHFTextField
                        name="name"
                        label="Name"
                    />
                    <RHFTextField
                        multiline
                        rows={4}
                        maxRows={5}
                        name="about"
                        label="About"
                    />
                    <Stack direction="row" justifyContent={"end"}>
                        <Button color="primary" size="large" type="submit" variant="outline"> Save </Button>
                    </Stack>

                </Stack>
            </Stack>


        </FormProvider>
    )
}

export default ProfileForm
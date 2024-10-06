import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase/config';
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { Label } from "@/components/ui/Label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const schema = yup.object().shape({
    email: yup.string().required("Email is required").
    email("Email is not valid. ex: user@domain.tld"),
    password: yup.string().required("Password is mandatory").min(8,"Password has to be at least 8 characters long"),
    confirmPassword: yup.string().oneOf([yup.ref('password'),null], "Password must be the same")
})

export const RegisterForm = () => {
    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    }); 

    const navigate = useNavigate();

    const onSubmitForm = (data) => {
        console.log(data);

        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            // eslint-disable-next-line no-unused-vars
            const user = userCredential.user;
            navigate('/')
        })
        .catch((error) => {
            // eslint-disable-next-line no-unused-vars
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
        });
    }

  return (
    <>
        <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>
                You can create your account here.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label>Email</Label>
                    <Input type="email" id="email" placeholder="Email for register" {...register('email')} />
                    <p>{errors.email && errors.email.message}</p>
                </div>
                <div className="space-y-1">
                    <Label>Password</Label>
                    <Input type="password" id="password" placeholder="Password for register" {...register('password')} />
                    <p>{errors.password && errors.password.message}</p>
                </div>
                <div className="space-y-1">
                    <Label>Confirm Password</Label>
                    <Input type="password" id="confirmPassword" placeholder="Repeat your register" {...register('confirmPassword')} />
                    <p>{errors.confirmPassword && errors.confirmPassword.message}</p>
                </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit">Register</Button>
                </CardFooter>
            </form>
        </Card>
    </>
  )
}

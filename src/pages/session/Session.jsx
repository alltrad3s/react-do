import { Link } from "react-router-dom"
import { RegisterForm } from "./components/RegisterForm"
import { LoginForm } from "./components/LoginForm"
import { useState } from "react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export const Session = () => {
  //const [typeForm, setTypeForm] = useState("");

  return (
    <>
        <Link to="/home">Ir al home</Link>
        <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </>
  )
}

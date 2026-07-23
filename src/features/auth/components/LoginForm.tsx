import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RefreshCw } from "lucide-react";
import { useState } from "react";
import { PasswordInput } from "./PasswordInput";

import { loginSchema, type LoginFormData } from "../schemas/login.schema";

import { Input } from "@base-ui/react/input";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../../../components/ui/form";
import { ForgotPasswordDialog } from "./ForgotPassword";
import { Button } from "../../../components/ui/button";

const generateCaptcha = () => {
  const characters = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";

  let captcha = "";

  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return captcha;
};

export function LoginForm() {
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState(generateCaptcha());

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      captcha: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    if (data.captcha !== captcha) {
      form.setError("captcha", {
        type: "manual",
        message: "Invalid captcha",
      });

      setCaptcha(generateCaptcha());
      form.setValue("captcha", "");

      return;
    }
    navigate("/");
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* EMAIL */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-sm font-medium">Username</FormLabel>

              <FormControl>
                <div className="relative">
                  <Mail
                    className="
                  pointer-events-none
                  absolute
                  left-3.5
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  text-muted-foreground
                "
                  />

                  <Input
                    {...field}
                    type="email"
                    placeholder="you@example.com"
                    className="
    h-12
    w-full
    rounded-xl
    border
    border-slate-300
    bg-white
    pl-10
    text-sm
    transition-all
    focus:border-primary
    focus:ring-2
    focus:ring-primary/20
  "
                  />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* PASSWORD */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-sm font-medium">Password</FormLabel>

              <FormControl>
                <PasswordInput {...field} placeholder="Enter your password" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="captcha"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-sm font-medium">
                Enter Captcha
              </FormLabel>

              <div className="flex items-center gap-3">
                {/* CAPTCHA TEXT */}
                <div
                  className="
            flex
            h-12
            min-w-[150px]
            select-none
            items-center
            justify-center
            rounded-xl
            bg-slate-100
            px-4
            text-lg
            font-bold
            tracking-[0.35em]
            text-[#123B6D]
          "
                >
                  {captcha}
                </div>

                {/* REFRESH BUTTON */}
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    setCaptcha(generateCaptcha());
                    form.setValue("captcha", "");
                  }}
                  className="h-12 w-12 rounded-xl"
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>

                {/* INPUT */}
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter captcha"
                    className="
              h-12
              min-w-0
              flex-1
              pl-5
              rounded-xl
              border
              border-slate-300
              bg-white
              text-sm
              transition-all
              focus:border-primary
              focus:ring-2
              focus:ring-primary/20
            "
                  />
                </FormControl>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* OPTIONS */}
        {/* OPTIONS */}
        <div className="flex items-center justify-between gap-4 pt-1">
          <ForgotPasswordDialog />
        </div>

        {/* LOGIN BUTTON */}
        <Button
          type="submit"
          className="
        h-12
        w-full
        rounded-xl
        
        text-base
        font-semibold
        text-white
        shadow-md
        transition-all
        duration-200

        hover:bg-primary/90
        hover:shadow-lg

        active:scale-[0.98]
        login-box
      "
        >
          <span>Sign In</span>
        </Button>

        {/* REGISTER */}
        {/* <p className="pt-2 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="
          login-box
        "
          >
            Create Account
          </Link>
        </p> */}
      </form>
    </Form>
  );
}

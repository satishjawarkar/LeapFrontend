import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { Button } from "@base-ui/react/button";
import { Input } from "@base-ui/react/input";
import { Dialog } from "@base-ui/react/dialog";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "../../../components/ui/form";
import { forgotPasswordSchema, type ForgotPasswordFormData } from "../schemas/forgotPassword.schemas";



export function ForgotPasswordDialog() {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [sent, setSent] = useState(false);

    const form = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: { username: "" },
    });

    const onSubmit = async (data: ForgotPasswordFormData) => {
        setIsSubmitting(true);
        try {
            // TODO: yaha apna actual API call daalna
            // await api.post("/auth/forgot-password", { email: data.username });

            console.log("Sending reset link to:", data.username);
            await new Promise((res) => setTimeout(res, 1000)); // fake delay, remove later

            setSent(true);
        } catch (err) {
            form.setError("username", {
                type: "manual",
                message: "Something went wrong. Try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleOpenChange = (nextOpen: boolean) => {
        setOpen(nextOpen);
        if (!nextOpen) {
            // dialog band hone par reset kar do taaki agli baar fresh khule
            form.reset();
            setSent(false);
        }
    };

    return (
        <Dialog.Root open={open} onOpenChange={handleOpenChange}>
            <Dialog.Trigger
                className="
          text-sm
          font-medium
          text-primary
          transition-colors
          hover:text-primary/80
          hover:underline
        "
            >
                Forgot password?
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Backdrop
                    className="
      fixed
      inset-0
      z-40
      bg-black/50
      backdrop-blur-sm
    "
                />
                <Dialog.Popup
                    className="
      fixed
      left-1/2
      top-1/2
      z-50
      w-[90vw]
      max-w-md
      -translate-x-1/2
      -translate-y-1/2
      rounded-2xl
      bg-white
      p-6
      shadow-xl
    "
                >
                    {!sent ? (
                        <>
                            <Dialog.Title className="text-lg font-semibold text-[#123B6D]">
                                Reset your password
                            </Dialog.Title>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Enter your registered username/email and we'll send you a
                                reset link.
                            </p>

                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="mt-5 space-y-4"
                                >
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem className="space-y-2">
                                                <FormLabel className="text-sm font-medium">
                                                    Username
                                                </FormLabel>
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

                                    <div className="flex justify-end gap-3 pt-2">
                                        <Dialog.Close
                                            className="
                        h-11
                        rounded-xl
                        px-4
                        text-sm
                        font-medium
                        text-slate-600
                        hover:bg-slate-100
                      "
                                        >
                                            Cancel
                                        </Dialog.Close>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="
                        h-11
                        rounded-xl
                        px-5
                        text-sm
                        font-semibold
                        text-white
                        login-box
                        disabled:opacity-60
                      "
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-2">
                                                    <Loader2 className="h-4 w-4 animate-spin" />
                                                    Sending...
                                                </span>
                                            ) : (
                                                "Send reset link"
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </>
                    ) : (
                        <div className="py-4 text-center">
                            <Dialog.Title className="text-lg font-semibold text-[#123B6D]">
                                Check your email
                            </Dialog.Title>
                            <p className="mt-2 text-sm text-muted-foreground">
                                We've sent a password reset link to your email address.
                            </p>
                            <Dialog.Close
                                className="
                  mt-5
                  h-11
                  rounded-xl
                  px-5
                  text-sm
                  font-semibold
                  text-white
                  login-box
                "
                            >
                                Close
                            </Dialog.Close>
                        </div>
                    )}
                </Dialog.Popup>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
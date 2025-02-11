"use client"
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { FC, useState } from "react";
import { Icons } from "./Icons";
import { Button } from "./ui/Button";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loginWithGoogle = async () => {
        setIsLoading(true);
        try {
            await signIn('google')
        } catch (error) {
            //toast notification 
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={cn('flex justify-center', className)}{...props}>
            <Button onClick={loginWithGoogle} isLoading={isLoading} size='sm' className="w-full">{isLoading ? null : <Icons.google className="mr-2 h-4 w-4" />}Google</Button>
        </div>
    )
}

export default UserAuthForm;

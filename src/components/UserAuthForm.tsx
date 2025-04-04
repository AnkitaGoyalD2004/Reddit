import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "./ui/Button";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm : FC<UserAuthFormProps> = ({}) => {
    return (
        <div className={cn('flex justify-center')}>
            <Button>Google</Button>
        </div>
    )
}

export default UserAuthForm
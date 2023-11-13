import { GoogleButton } from "./GoogleButton"

export const Navbar = () => {
    // Create a Navbar component that will be used in app/page.tsx
    // It contains the name of the app and the GoogleButton component
    return (
        <div className="flex items-center justify-between w-full px-4 py-2 bg-white dark:bg-slate-800 shadow-md h-24">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                WhatsUp?
            </h1>
            <GoogleButton />
        </div>
    )
}
import Link from "next/link"

export const Footer = () => {
    // Say "Made by Siddhesh Agarwal" in the footer
    return (
        <footer className="flex items-center justify-center w-full h-24 border-t bg-white dark:bg-slate-800 dark:text-white">
            Made with ❤️ by{" "}
            <span className="ml-1 font-bold">
                <Link
                    className="flex items-center justify-center"
                    href="https://www.siddhesh.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Siddhesh Agarwal
                </Link>
            </span>
        </footer>
    )
}

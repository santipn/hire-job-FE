export const sessionOptions = {
    password: process.env.NEXT_PUBLIC_SESSION_SECRET,
    cookieName: "hirejob-session",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};
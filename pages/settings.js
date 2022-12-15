import { getSession, signOut } from "next-auth/react";

export default function Settings() {

    return (
        <div className="container mx-auto h-screen w-screen mt-5">
            <div className="flex justify-between">
                <div className="text-2xl text-gray-500">
                    Settings
                </div>
                <div className="text-sm cursor-pointer text-indigo-500 rounded border border-indigo-500 p-2" onClick={() => signOut()}>
                    Logout
                </div>
            </div>
        </div>
    );
};

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });

    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false
            }
        }
    }

    return {
        props: { session }
    }
}
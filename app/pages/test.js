import { loggedIn } from "@Modules/Auth/Auth";

export async function getServerSideProps(context) {
    const cookies = context.req.cookies;
    console.log("COOKIES from cookies obj", cookies);
    const isLoggedIn = loggedIn(cookies.user);
    let token = cookies.user;
    console.log("TOKEN", token);

    return {
        props: {
            cookies: cookies,
        }, // will be passed to the page component as props
    }
}

function Test(props) {
    const { user } = props.cookies;
    return(
        <p>User cooke: {user}</p>
    );
} 

export default Test;
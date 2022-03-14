import { Center } from "@chakra-ui/layout";
import Carousel from "@Components/Carousel/Carousel";
import Main from "@Components/Main/Main";
import SectionHeader from "@Components/SectionHeader/SectionHeader";
import SNoLink from "@Components/SNoLink/SNoLink";
import { loggedIn } from "@Modules/Auth/Auth";
import { getUserCourses } from "@Modules/Courses/Courses";
import { parseCookies } from "@Utils/jwt";

export async function getServerSideProps(context) {
  var myCourses = [];

  const cookies = parseCookies(context.req);
  console.log(cookies);
  const isLoggedIn = loggedIn(cookies.user);
  let token = cookies.user;

  let myCoursesResponse = await getUserCourses(token);
  if (myCoursesResponse)
    myCourses = myCoursesResponse;

  console.log(typeof myCourses, myCourses);

  return {
    props: {
        myCourses: myCourses,
    }, // will be passed to the page component as props
  }
}  

function Mine(props) {
  const { myCourses } = props;

  return(
    <Main>
      <Center><SNoLink href="/"><img src="/siucode_logo.png" /></SNoLink></Center>
      <SectionHeader title="Continue Learning" />
      <Carousel items={myCourses} />
    </Main>
  );
}

export default Mine;
import { Grid } from "@chakra-ui/layout";
import Main from "@Components/Main/Main";
import { loggedIn } from "@Modules/Auth/Auth";
import instance from "@Utils/instance";
import Editor from "@monaco-editor/react";
import { Button, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import TutorialSideBar from "@Modules/Tutorials/TutorialSideBar/TutorialSideBar";
import SNoLinkButton from "@Components/SNoLinkButton/SNoLinkButton";
import Footer from "@Components/Footer/Footer";
import Router from "next/router";
import { updateUserTutorial } from "@Modules/Tutorials/Tutorials";
import { useCookies } from "react-cookie";

export async function getServerSideProps(context) {
  const { id } = context.query;

  var values = {};

  const cookies = context.req.cookies;
  const isLoggedIn = loggedIn(cookies.user);
  const headers = {};

  if (isLoggedIn) {
    let token = cookies.user;
    headers["Authorization"] = "Bearer " + token;
  }

  let tutorialResponse;

  try {
    tutorialResponse = await instance.get("/Tutorials/UserTutorialDetails/" + id, {
      headers: {...headers},
    });
    
    if (tutorialResponse.statusText == "OK")
    values = tutorialResponse.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      values: values,
    }, // will be passed to the page component as props
  }
}

function Tutorial(props) {
  const { id, prompt, courseId } = props.values;

  const [editorText, setText] = useState("<button onClick=\"document.getElementById('demo').innerHTML = \n\t'Change me!'\"\n>\n\tClick Me!\n</button>\n");

  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const isLoggedIn = loggedIn(cookies.user);
  const token = cookies.user;

  /**
   * Saves progress, using tutorial id from query context. 
   */
  async function saveInProgress(event) {
    let success = await updateUserTutorial(id, token, true, false);
    if (success) {
      let redirect = `/courses/${courseId}`;
      Router.push(redirect);
    }
  } 

  return(
    <Main width="100%" margin="0" maxWidth="100%">
      <Grid templateColumns="6% 50% 44%" width="100%" height="450px">
        <GridItem>
          <TutorialSideBar prompt={prompt} />
        </GridItem>
        <GridItem>
          <Editor
            height="100%"
            width="100%"
            defaultLanguage="javascript" theme="vs-dark"
            defaultValue={editorText}
            onChange={(value, event) => { setText(value) }}
          />
        </GridItem>
        <GridItem width="100%">
          <iframe srcDoc={
            "<html><body>" + editorText + "<br /><div id=\"demo\">Hi!</div></body></html>"
          } />
        </GridItem>
      </Grid>
      <Footer>
        <SNoLinkButton href={`/courses/${courseId}`} variant="yellowOutline">
          Exit
        </SNoLinkButton>
        <Button variant="yellow" onClick={saveInProgress}>
          Save Progress
        </Button>
      </Footer>
    </Main>
  );
} 

export default Tutorial;
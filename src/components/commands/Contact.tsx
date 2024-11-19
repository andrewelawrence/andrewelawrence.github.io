import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
  checkRedirect,
  generateTabs,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Contacts: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "contact")) {
      contacts.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="contact" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <HelpWrapper data-testid="contact">
      {/* <ProjectsIntro>Here are my social links</ProjectsIntro> */}
      {contacts.map(({ id, title, url, tab }) => (
        <CmdList key={title}>
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs(tab)}
          <CmdDesc> {url}</CmdDesc>
        </CmdList>
      ))}
      <Usage cmd="contact" marginY />
    </HelpWrapper>
  );
};

const contacts = [
  {
    id: 1,
    title: "Email",
    url: "mailto:andrew.e.lawrence@gmail.com",
    tab: 4,
  },
  {
    id: 2,
    title: "GitHub",
    url: "https://github.com/andrewelawrence",
    tab: 3,
  },
  {
    id: 3,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/andrew-e-lawrence/",
    tab: 1,
  },
];
import ActivityContent from "./ActivityContent";
import DashboardContent from "./DashboardContent";
import MessagesContent from "./MessagesContent";
import ProjectContent from "./ProjectContent";

const ContentComp = (routerLink) => {
  return (
    <>
    { routerLink.routerLink == '/' && <DashboardContent/>}
    { routerLink.routerLink === '/messages' && <MessagesContent/>}
    { routerLink.routerLink === '/project' && <ProjectContent/>}
    { routerLink.routerLink === '/activity' && <ActivityContent/>}
    </>
  )
}

export default ContentComp;
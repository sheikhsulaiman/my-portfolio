import NewProjectProposalEmail from "@/emails/project-proposal-mail";
import { render } from "@react-email/components";

interface NewProjectProposalEmailProps {
  invitedByUsername?: string;
  invitedByEmail?: string;
  projectTypes?: string[];
  deadline?: string;
  needToknow?: string;
}

export const getNewProjectProposalHtml = async ({
  invitedByUsername,
  invitedByEmail,
  projectTypes,
  deadline,
  needToknow,
}: NewProjectProposalEmailProps) => {
  const emailHtml = await render(
    <NewProjectProposalEmail
      invitedByUsername={invitedByUsername}
      invitedByEmail={invitedByEmail}
      projectTypes={projectTypes}
      deadline={deadline}
      needToknow={needToknow}
    />
  );
  return emailHtml;
};

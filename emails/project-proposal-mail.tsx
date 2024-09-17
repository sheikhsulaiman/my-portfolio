import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface NewProjectProposalEmailProps {
  invitedByUsername?: string;
  invitedByEmail?: string;
  projectTypes?: string[];
  deadline?: string;
  needToknow?: string;
}

export const NewProjectProposalEmail = ({
  invitedByUsername,
  invitedByEmail,
  projectTypes,
  deadline,
  needToknow,
}: NewProjectProposalEmailProps) => {
  const previewText = `New Project Proposal from ${invitedByUsername} (${invitedByEmail})`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Let&apos;s start a new <strong>project</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello Sony,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>{invitedByUsername}</strong> (
              <Link
                href={`mailto:${invitedByEmail}`}
                className="text-blue-600 no-underline"
              >
                {invitedByEmail}
              </Link>
              ) has invited you to start a new <strong>project</strong> on{" "}
              <strong>
                <i>{projectTypes && projectTypes.join(", ")}</i>
              </strong>
              .
            </Text>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              {needToknow}
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

            <Text>Deadline</Text>
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              {deadline}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NewProjectProposalEmail;

import { projectProposalFormSchema } from "@/lib/schemas";
import { NextRequest, NextResponse } from "next/server";
import { getNewProjectProposalHtml } from "@/lib/emailHelper";

import { transporter } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validation = projectProposalFormSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      {
        errors: validation.error.errors,
      },
      { status: 400 }
    );
  }

  const emailHtml = await getNewProjectProposalHtml({
    invitedByUsername: body.fullname,
    invitedByEmail: body.email,
    projectTypes: body.projectType,
    deadline: body.timeplan,
    needToknow: body.needToKnow,
  });

  const mailOptions = {
    from: "sonyedtech@gmail.com",
    to: "sheikhsulaimansony@outlook.com",
    subject: "Project offer from sonyed.tech",
    html: emailHtml,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return NextResponse.json({ error: error }, { status: 500 });
    } else {
      return NextResponse.json({
        message: "Thank you for your cooperation. I will contact you shortly.",
        info: info,
      });
    }
  });
  console.log(body);
  return NextResponse.json({
    message: "Thank you for your cooperation. I will contact you shortly.",
  });
}

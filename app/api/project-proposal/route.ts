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

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        // console.log(error);
        reject(error);
      } else {
        // console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailOptions = {
    from: "sonyedtech@gmail.com",
    to: "sheikhsulaimansony@outlook.com",
    subject: "Project offer from sonyed.tech",
    html: emailHtml,
  };

  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (!error) {
          resolve(info);
          return NextResponse.json(
            {
              message:
                "Thank you for your cooperation. I will contact you shortly.",
            },
            { status: 200 }
          );
        } else {
          reject(error);
          return NextResponse.json({ error: error }, { status: 500 });
        }
      });
    });

    return NextResponse.json(
      { message: "Proposal sent successfully" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}

import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import React from "react";

export const emailTemplate = ({
  name,
  email,
  phone,
  message
}: {
  name: string;
  email: string;
  phone: number;
  message: string;
}) => (
  <Html>
    <Head />
    <Preview> </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={
            "https://utfs.io/f/1T6lrtsFpELwp8Ez1IqMzy29cVnXes5bCQBAuUZFYgTrtvEG"
          }
          width="160"
          height="80"
          alt="logo"
        />
        <Text style={{ ...title, textAlign: "center" }}>
          Ada pesan dari,{email}
        </Text>
        <Text style={textContainer}>
          <Text style={paragraph}>Nama: {name}</Text>
          <Text style={paragraph}>Email: {email}</Text>
          <Text style={paragraph}>Nomor telepon: {phone}</Text>
        </Text>
        <Text style={paragraph}>{message}</Text>

        <Hr style={hr} />
        <Text style={footer}>
          Putra Dunia Cargo, Jl. KH Mas Mansyur No. 25 Kompleks Said Naum Kebon
          Kacang Tanah Abang Jakarta pusat
        </Text>
      </Container>
    </Body>
  </Html>
);

export default emailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  paddingBottom: "60px",
};
const textContainer = {
  margin: "0 auto",
  padding: "20px 0 12px",
};

const paragraph = {
  fontSize: "21px",
  fontWeight: "300",
  lineHeight: "26px",
};

const title = {
  fontSize: "28px",
  paddingTop: "18px",
  fontWeight: "bold",
  textAlign: "center",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

import { useContext } from "react";
import { useRouter } from "next/router";
import AuthForm from "../../components/authForm";
import { AuthContext } from "../../contexts/auth";
import { SellerContext } from "../../contexts/seller";
import Layout from "../../components/layout";
import { LocaleProvider } from "../../contexts/locale";
import { ContentDirectionProvider } from "../../contexts/contentDirection";

export const getStaticPaths = async () => {
  const languages = ["ar", "en"];

  const paths = languages.map((lang) => ({
    params: { lang },
  }));

  // fallback: false means pages that don’t have the
  // correct id will 404.
  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
  return {
    props: {
      lang: params.lang,
    },
  };
}

const SignupPage = ({ lang }) => {
  // const user = useContext(AuthContext);
  // const { isSeller } = useContext(SellerContext);
  // const router = useRouter();

  // if (user) {
  // if (isSeller) router.push("/");
  // else router.push("/register");
  // }

  return (
    <LocaleProvider lang={lang}>
      <ContentDirectionProvider>
        <Layout>
          <AuthForm action="signup" />
        </Layout>
      </ContentDirectionProvider>
    </LocaleProvider>
  );
};

export default SignupPage;

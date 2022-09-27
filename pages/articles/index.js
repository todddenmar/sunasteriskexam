import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import SectionTitle from "../../components/SectionTitle";
import { ArrowUturnLeftIcon, BeakerIcon } from "@heroicons/react/24/solid";
import IconButton from "../../components/IconButton";
import { useRouter } from "next/router";

function ArticlesPage() {
  const pageTitle = "Articles Page";
  const router = useRouter();
  return (
    <div>
      <Header title={pageTitle} />
      <body className="bg-gray-900 ">
        <Container>
          <div className="flex items-center  gap-5">
            <IconButton
              Icon={<ArrowUturnLeftIcon className="h-5 w-5" />}
              onClick={() => router.push("/")}
            />
            <SectionTitle text={pageTitle} />
          </div>
        </Container>
      </body>
    </div>
  );
}

export default ArticlesPage;

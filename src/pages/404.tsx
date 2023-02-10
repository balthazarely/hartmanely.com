import Link from "next/link";

export default function Custom404() {
  return (
    <div className="mx-auto mt-32  text-center">
      <h3>Hmmm.... Looks like this page is missing</h3>
      <p className="mb-4">Maybe try another page, or contact us for help.</p>
      <Link href={"/"}>
        <p className="link-small">Back Home</p>
      </Link>
    </div>
  );
}

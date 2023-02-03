import Link from "next/link";

export function Header() {
  return (
    <div className="bg-red-500 p-10">
      <Link href={"/"}>HartmanEly</Link>
      <div className="flex gap-6">
        <Link href={"/about"}>About</Link>
        <Link href={"/redevelopment"}>Redevelopment</Link>
        <Link href={"/renewable-energy"}>Renewable Energy</Link>
        <Link href={"/consulting-work"}>Consulting Work</Link>
      </div>
    </div>
  );
}

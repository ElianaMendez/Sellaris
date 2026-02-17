import NavBar from "@/components/nav-bar";
import FilterDrawer from "@/components/filter-drawer";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex min-h-screen flex-col">
            <main className="flex-1 container mx-auto px-4 py-6 max-w-md md:max-w-2xl lg:max-w-4xl">
                {children}
            </main>
            <FilterDrawer />
            <NavBar />
        </div>
    );
}

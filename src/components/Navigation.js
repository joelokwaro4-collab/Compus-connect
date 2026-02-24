"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";
import { useAuth } from "@/context/AuthContext";

export default function Navigation() {
    const pathname = usePathname();
    const { user } = useAuth();

    // Hide navigation on login and signup pages if needed, 
    // or keep it for easy access. Usually better to show for logged in users.
    const isAuthPage = pathname === "/login" || pathname === "/signup";

    // We only show the full navigation for logged-in users to keep the experience premium
    if (!user || isAuthPage) return null;

    const navItems = [
        { label: "Home", path: "/", icon: "🏠" },
        { label: "Discover", path: "/discover", icon: "🔍" },
        { label: "Profile", path: "/profile", icon: "👤" },
    ];

    return (
        <nav className={styles.navContainer}>
            {/* Desktop Top Bar */}
            <div className={styles.desktopNav}>
                <div className={styles.logoGroup}>
                    <span className={styles.logoIcon}>🎓</span>
                    <span className={styles.logoText}>Campus Connect</span>
                </div>
                <div className={styles.navLinks}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`${styles.navLink} ${pathname === item.path ? styles.active : ""}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                <div className={styles.userSection}>
                    <Link href="/profile">
                        <img
                            src={user.photoURL || "https://ui-avatars.com/api/?name=" + (user.displayName || "User")}
                            alt="Profile"
                            className={styles.avatar}
                        />
                    </Link>
                </div>
            </div>

            {/* Mobile Bottom Bar */}
            <div className={styles.mobileNav}>
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`${styles.mobileTab} ${pathname === item.path ? styles.mobileActive : ""}`}
                    >
                        <span className={styles.tabIcon}>{item.icon}</span>
                        <span className={styles.tabLabel}>{item.label}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}

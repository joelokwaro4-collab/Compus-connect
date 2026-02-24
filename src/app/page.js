"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Logo from "@/components/Logo";
import LogoutModal from "@/components/LogoutModal";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const { user, logout } = useAuth();

  const router = useRouter();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  const goToDashboard = () => {
    router.push("/profile");
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      {/* Ambient background orbs */}
      <div className={styles.ambientOrb} />
      <div className={styles.ambientOrb} />
      <div className={styles.ambientOrb} />

      {/* Logout Confirmation Modal */}
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={() => {
          logout();
          setIsLogoutModalOpen(false);
        }}
      />

      {/* Hero Section */}
      <main className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
            <Logo size={90} />
          </div>

          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Built for Kenyan University Students
          </div>

          <h1 className={styles.heroTitle}>
            Your Campus {" "}
            <span className={styles.heroTitleGradient}>Your Network.</span>
          </h1>

          <p className={styles.heroDescription}>
            One platform for everything campus — trade textbooks, find hostels,
            join study groups, access M-Pesa payments, and stay safe with
            emergency SOS. Built by students, for students.
          </p>

          <div className={styles.heroCtas}>
            {user ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <span className={styles.welcomeText}>Welcome back, {user.displayName || user.email.split('@')[0]}!</span>
                <Link href="/discover" className={styles.btnPrimary}>Discover Comrades</Link>
              </div>
            ) : (
              <div className={styles.heroCtas}>
                <Link href="/signup" className={styles.btnPrimary}>Get Started Today</Link>
                <Link href="/login" className={styles.btnSecondary}>Log In</Link>
              </div>
            )}
          </div>
        </div>
      </main>



      {/* Footer */}
      <footer className={styles.footer}>
        © 2026 Campus Connect Kenya — Made with{" "}
        <span className={styles.footerHeart}>♥</span> for the Comrades.
      </footer>
    </div>
  );
}

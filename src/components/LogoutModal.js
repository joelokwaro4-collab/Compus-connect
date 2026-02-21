"use client";

import styles from "../app/page.module.css";

export default function LogoutModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalBackdrop} onClick={onClose}>
            <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalIcon}>🚪</div>
                <h2 className={styles.modalTitle}>Safe to Leave?</h2>
                <p className={styles.modalDescription}>
                    Are you sure you want to sign out? You'll need to log in again to access your campus network.
                </p>
                <div className={styles.modalActions}>
                    <button className={styles.btnSecondary} onClick={onClose}>
                        Stay Logged In
                    </button>
                    <button className={styles.btnLogout} onClick={onConfirm}>
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
}

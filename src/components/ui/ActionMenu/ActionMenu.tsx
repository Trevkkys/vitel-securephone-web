import { useEffect, useRef, useState } from "react";
import styles from "./ActionMenu.module.css";

export interface ActionMenuItem {
    label: string;
    onClick: () => void;
}

interface ActionMenuProps {
    items: ActionMenuItem[];
}

function ActionMenu({
    items,
}: ActionMenuProps) {
    const [open, setOpen] = useState(false);
    const [openUp, setOpenUp] = useState(false);

    const menuRef =
        useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(
            event: MouseEvent
        ) {
            if (
                menuRef.current &&
                !menuRef.current.contains(
                    event.target as Node
                )
            ) {
                setOpen(false);
            }
        }

        document.addEventListener(
            "mousedown",
            handleClick
        );

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClick
            );
    }, []);

    return (
        <div
            className={styles.container}
            ref={menuRef}
        >
            <button
                className={styles.button}
                onClick={() => {
                    if (!open && menuRef.current) {
                        const rect =
                            menuRef.current.getBoundingClientRect();

                        const spaceBelow =
                            window.innerHeight - rect.bottom;

                        setOpenUp(spaceBelow < 220);
                    }

                    setOpen(!open);
                }}
            >
                ⋮
            </button>

            {open && (
                <div
                    className={`${styles.menu} ${openUp ? styles.up : ""
                        }`}
                >
                    {items.map((item) => (
                        <button
                            key={item.label}
                            className={styles.menuItem}
                            onClick={() => {
                                item.onClick();
                                setOpen(false);
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ActionMenu;
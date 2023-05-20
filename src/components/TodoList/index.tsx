import classNames from "classnames";
import React, { useRef, useState } from "react";
import styles from "./style.module.css";

interface TaskItemData {
  id: number;
  name: string;
  status: "completed" | "active";
}

function TaskForm({ onCreate }: { onCreate: (v: string) => void }) {
  const [value, setValue] = useState("");
  return (
    <input
      type="text"
      className={styles["task-input"]}
      placeholder="Add a new task..."
      value={value}
      onChange={({ target }) => setValue(target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onCreate(value);
          setValue("");
        }
      }}
    />
  );
}

export function TaskItem({
  item,
  onToggle,
  onDelete,
}: {
  item: TaskItemData;
  onToggle?(): void;
  onDelete?(): void;
}) {
  return (
    <div
      className={classNames(
        styles["task-item"],
        item.status === "completed" && styles["is-completed"]
      )}
    >
      <div className={styles["task-status"]} onClick={onToggle} />
      <div className={styles["task-name"]}>{item.name}</div>
      <div className={styles["task-delete"]} onClick={onDelete} />
    </div>
  );
}

export default function TodoList({ className }: { className?: string }) {
  const idRef = useRef(0);
  const filters = ["all", "active", "completed"] as const;
  const [filter, setFilter] = useState<"all" | TaskItemData["status"]>("all");
  const [list, setList] = useState<TaskItemData[]>([
    {
      id: idRef.current++,
      name: "Download LCUI source code",
      status: "completed",
    },
    {
      id: idRef.current++,
      name: "Build LCUI",
      status: "completed",
    },
    {
      id: idRef.current++,
      name: "Read LCUI tutorials",
      status: "active",
    },
    {
      id: idRef.current++,
      name: "Create my LCUI application",
      status: "active",
    },
  ]);
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.app}>
        <div className={styles.header}>
          <div className={styles.title}>Todo list</div>
          <div className={styles.tools}>
            <div className={styles.count}>
              {list.length} {list.length > 1 ? "tasks" : "task"}
            </div>
            <div className={styles["task-filters"]}>
              {filters.map((s) => (
                <div
                  className={classNames(
                    styles["task-filter"],
                    s === filter && styles["is-active"]
                  )}
                  onClick={() => setFilter(s)}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
        <TaskForm
          onCreate={(name) => {
            setList([...list, { name, id: idRef.current++, status: "active" }]);
          }}
        />
        <div className={styles["task-list"]}>
          {list
            .filter((item) => filter === "all" || item.status === filter)
            .map((item) => (
              <TaskItem
                key={item.id}
                item={item}
                onToggle={() =>
                  setList(
                    list.map((target) =>
                      target.id === item.id
                        ? {
                            ...target,
                            status:
                              target.status === "completed"
                                ? "active"
                                : "completed",
                          }
                        : target
                    )
                  )
                }
                onDelete={() =>
                  setList(list.filter((target) => target.id !== item.id))
                }
              />
            ))}
        </div>
      </div>
    </div>
  );
}

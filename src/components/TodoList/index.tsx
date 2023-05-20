import classNames from "classnames";
import React, { useRef, useState } from "react";
import "./style.scss";
import styles from "./style.module.scss";

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
      className="task-input"
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
        "task-item",
        item.status === "completed" && "is-completed"
      )}
    >
      <div className="task-status" onClick={onToggle} />
      <div className="task-name">{item.name}</div>
      <div className="task-delete" onClick={onDelete} />
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
      <div className="app">
        <div className="header">
          <div className="title">Todo list</div>
          <div className="tools">
            <div className="count">
              {list.length} {list.length > 1 ? "tasks" : "task"}
            </div>
            <div className="task-filters">
              {filters.map((s) => (
                <div
                  key={s}
                  className={classNames(
                    "task-filter",
                    s === filter && "is-active"
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
        <div className="task-list">
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

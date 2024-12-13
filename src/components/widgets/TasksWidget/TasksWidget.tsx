import React, { useEffect, useState } from "react"
import "./TasksWidget.sass"
import { useAppDispatch, useAppSelector } from "../../../models/Hook"
import IPost from "../../../models/Post"
import { Status } from "../../../models/Status"
import { fetchPosts } from "../../../redux/PostListSlice"
import { getBadges } from "../../../redux/BadgesSlice"
import { getProgress } from "../../../utils/date"


const TasksWidget = React.memo(() => {

  const dispatch = useAppDispatch()
  const posts: IPost[] = useAppSelector(state => state.posts.posts)
  const status = useAppSelector(state => state.posts.statusFetchPosts)
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    if (status === Status.Idle) {
      dispatch(fetchPosts())
      dispatch(getBadges())
    }
  }, [status, dispatch])

  const updateTimer = () => {
    setTimer(timer + 1)
  }

  useEffect(() => {
    const timeout = setTimeout(updateTimer, 1000)
    return () => clearTimeout(timeout)
  }, [timer])

  const currentTasksFilter = (task: IPost) => {
    return new Date(task.deadline).toLocaleDateString().toString() === new Date().toLocaleDateString().toString() && task.visible
  }

  const renderItems = (data: IPost[]) => {
    const currentTasks = data.filter(currentTasksFilter)
    currentTasks.sort((post1, post2) => post1.deadline > post2.deadline ? 1 : -1)
    if (currentTasks.length) {

      return currentTasks.map((item: IPost) => {
        const { id, visible, deadline, create, body } = item
        if (visible) {
          return (
            <li key={id} className="tasksWidget__list">
              <div className="tasksWidget__item">
                <div className="tasksWidget__header">{body}</div>
                <div
                  className="progress mb-2"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar"
                    style={{ width: `${getProgress(deadline, create)}%` }}
                  ></div>
                </div>
              </div>
            </li>
          )
        }
      })

    } else {
      return <div className="tasksWidget__zero">Дедлайнов на сегодня нет</div>
    }

  }

  return (
    <div className="tasksWidget">
      <ul className="tasksWidget__wrapper">
        {renderItems(posts)}
      </ul>
    </div>
  )
})

export default TasksWidget
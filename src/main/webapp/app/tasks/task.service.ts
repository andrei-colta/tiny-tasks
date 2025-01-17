import { Observable } from 'rxjs';

import { Task } from './task';

/**
 * Service interface for implementations that handle tiny tasks.
 */
export interface TaskService {
  /**
   * Returns the list of all tasks.
   *
   * @returns an `Observable` holding the list of tasks
   */
  getAll(): Observable<Task[]>;

  /**
   * Returns the list of all tasks filtered by search value.
   *
   * @param searchValue the search value to filter tasks
   * @returns an `Observable` holding the list of filtered tasks
   */
  search(searchValue: string): Observable<Task[]>;

  /**
   * Adds a new task to the list of tasks.
   *
   * @param name the task's name
   * @returns an `Observable` holding the created task
   */
  create(name: string): Observable<Task>;

  /**
   * Updates a task from the list of tasks.
   *
   * @param task the updated task
   * @returns an empty `Observable`
   */
  update(task: Task): Observable<void>;

  /**
   * Removes the task with the given ID from the list of tasks.
   *
   * @param id the ID of the task to be removed
   * @returns an empty `Observable`
   */
  delete(id: string): Observable<void>;

  /**
   * Removes the tasks with the status "Done".
   *
   * @returns an empty `Observable`
   */
  clearDoneTasks(): Observable<void>;
}

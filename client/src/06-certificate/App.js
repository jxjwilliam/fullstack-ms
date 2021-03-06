/* eslint-disable no-shadow */
import React, { PureComponent } from 'react'
import { CssBaseline } from '@material-ui/core'
import { Header, Footer } from './layouts'
import { Viewer } from './exercises'
import { muscles, exercises } from './store'
import { Provider } from './context'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      exercises,
      exercise: {},
      editMode: false,
      category: '',
    }
  }

  getExercisesByMuscles() {
    const initExercises = muscles.reduce(
      (exercises, category) => ({
        ...exercises,
        [category]: [],
      }),
      {},
    )

    const { exercises } = this.state
    return Object.entries(
      exercises.reduce((es, exercise) => {
        const { muscles } = exercise
        // es[muscles] = [...es[muscles], exercise]
        return { ...es, [muscles]: [...es[muscles], exercise] }
      }, initExercises),
    )
  }

  handleCategorySelect = category =>
    this.setState({
      category,
    })

  handleExerciseSelect = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false,
    }))

  handleExerciseCreate = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise],
    }))

  handleExerciseDelete = id =>
    this.setState(({ exercises, exercise, editMode }) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise,
    }))

  handleExerciseSelectEdit = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true,
    }))

  handleExerciseEdit = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [...exercises.filter(ex => ex.id !== exercise.id), exercise],
      exercise,
    }))

  getContext = () => ({
    muscles,
    ...this.state,
    exercisesByMuscles: this.getExercisesByMuscles(),
    onCategorySelect: this.handleCategorySelect,
    onCreate: this.handleExerciseCreate,
    onEdit: this.handleExerciseEdit,
    onSelectEdit: this.handleExerciseSelectEdit,
    onDelete: this.handleExerciseDelete,
    onSelect: this.handleExerciseSelect,
  })

  render() {
    return (
      <Provider value={this.getContext()}>
        <CssBaseline />

        <Header />

        <Viewer />

        <Footer />
      </Provider>
    )
  }
}

export default App

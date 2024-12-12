import React, { Component, useEffect, useState } from "react"
import "./CalendarPage.sass"
import { getDayCode, getDaysInMonth } from "../../../utils/date"
import { useAppDispatch, useAppSelector } from "../../../models/Hook"
import { getSettings, IDate } from "../../../redux/SettingsSlice"
import { Status } from "../../../models/Status"


export interface ICalendarDB {
  months: IMonth[]
}

export interface IDay {
  number: number
  type: string
  position: number
}

export interface IMonth {
  number: number
  year: number
  name: string
  days: IDay[]
}
export const calendarDB: ICalendarDB = {
  months: [
    {
      name: 'Dec',
      number: 12,
      year: 2024,
      days: [
        { number: 1, type: 'weekend', position: 6 },
        { number: 2, type: 'normal', position: 7 },
        { number: 3, type: 'normal', position: 8 },
        { number: 4, type: 'normal', position: 9 },
        { number: 5, type: 'normal', position: 10 },
        { number: 6, type: 'normal', position: 11 },
        { number: 7, type: 'weekend', position: 12 },
        { number: 8, type: 'weekend', position: 13 },
        { number: 9, type: 'normal', position: 14 },
        { number: 10, type: 'normal', position: 15 },
        { number: 11, type: 'normal', position: 16 },
        { number: 12, type: 'normal', position: 17 },
        { number: 13, type: 'normal', position: 18 },
        { number: 14, type: 'weekend', position: 19 },
        { number: 15, type: 'weekend', position: 20 },
        { number: 16, type: 'normal', position: 21 },
        { number: 17, type: 'normal', position: 22 },
        { number: 18, type: 'normal', position: 23 },
        { number: 19, type: 'normal', position: 24 },
        { number: 20, type: 'normal', position: 25 },
        { number: 21, type: 'weekend', position: 26 },
        { number: 22, type: 'weekend', position: 27 },
        { number: 23, type: 'vacation', position: 28 },
        { number: 24, type: 'vacation', position: 29 },
        { number: 25, type: 'vacation', position: 30 },
        { number: 26, type: 'vacation', position: 31 },
        { number: 27, type: 'vacation', position: 32 },
        { number: 28, type: 'vacation', position: 33 },
        { number: 29, type: 'vacation', position: 34 },
        { number: 30, type: 'normal', position: 35 },
        { number: 31, type: 'normal', position: 36 }
      ]
    },
    {
      name: 'Jan',
      number: 1,
      year: 2024,
      days: [
        { number: 1, type: 'holiday', position: 2 },
        { number: 2, type: 'holiday', position: 3 },
        { number: 3, type: 'holiday', position: 4 },
        { number: 4, type: 'weekend', position: 5 },
        { number: 5, type: 'weekend', position: 6 },
        { number: 6, type: 'holiday', position: 7 },
        { number: 7, type: 'holiday', position: 8 },
        { number: 8, type: 'holiday', position: 9 },
        { number: 9, type: 'normal', position: 10 },
        { number: 10, type: 'normal', position: 11 },
        { number: 11, type: 'weekend', position: 12 },
        { number: 12, type: 'weekend', position: 13 },
        { number: 13, type: 'normal', position: 14 },
        { number: 14, type: 'normal', position: 15 },
        { number: 15, type: 'normal', position: 16 },
        { number: 16, type: 'normal', position: 17 },
        { number: 17, type: 'normal', position: 18 },
        { number: 18, type: 'weekend', position: 19 },
        { number: 19, type: 'weekend', position: 20 },
        { number: 20, type: 'normal', position: 21 },
        { number: 21, type: 'normal', position: 22 },
        { number: 22, type: 'normal', position: 23 },
        { number: 23, type: 'normal', position: 24 },
        { number: 24, type: 'normal', position: 25 },
        { number: 25, type: 'weekend', position: 26 },
        { number: 26, type: 'weekend', position: 27 },
        { number: 27, type: 'normal', position: 28 },
        { number: 28, type: 'normal', position: 29 },
        { number: 29, type: 'normal', position: 30 },
        { number: 30, type: 'normal', position: 31 },
        { number: 31, type: 'normal', position: 32 }
      ]
    },
    {
      name: 'Feb',
      number: 2,
      year: 2024,
      days: [
        { number: 1, type: 'weekend', position: 5 },
        { number: 2, type: 'weekend', position: 6 },
        { number: 3, type: 'normal', position: 7 },
        { number: 4, type: 'normal', position: 8 },
        { number: 5, type: 'normal', position: 9 },
        { number: 6, type: 'normal', position: 10 },
        { number: 7, type: 'normal', position: 11 },
        { number: 8, type: 'weekend', position: 12 },
        { number: 9, type: 'weekend', position: 13 },
        { number: 10, type: 'normal', position: 14 },
        { number: 11, type: 'normal', position: 15 },
        { number: 12, type: 'normal', position: 16 },
        { number: 13, type: 'normal', position: 17 },
        { number: 14, type: 'normal', position: 18 },
        { number: 15, type: 'weekend', position: 19 },
        { number: 16, type: 'weekend', position: 20 },
        { number: 17, type: 'normal', position: 21 },
        { number: 18, type: 'normal', position: 22 },
        { number: 19, type: 'normal', position: 23 },
        { number: 20, type: 'normal', position: 24 },
        { number: 21, type: 'normal', position: 25 },
        { number: 22, type: 'weekend', position: 26 },
        { number: 23, type: 'weekend', position: 27 },
        { number: 24, type: 'normal', position: 28 },
        { number: 25, type: 'normal', position: 29 },
        { number: 26, type: 'normal', position: 30 },
        { number: 27, type: 'normal', position: 31 },
        { number: 28, type: 'normal', position: 32 }
      ]
    },
    {
      name: 'Mar',
      number: 3,
      year: 2024,
      days: [
        { number: 1, type: 'weekend', position: 5 },
        { number: 2, type: 'weekend', position: 6 },
        { number: 3, type: 'normal', position: 7 },
        { number: 4, type: 'normal', position: 8 },
        { number: 5, type: 'normal', position: 9 },
        { number: 6, type: 'normal', position: 10 },
        { number: 7, type: 'normal', position: 11 },
        { number: 8, type: 'weekend', position: 12 },
        { number: 9, type: 'weekend', position: 13 },
        { number: 10, type: 'normal', position: 14 },
        { number: 11, type: 'normal', position: 15 },
        { number: 12, type: 'normal', position: 16 },
        { number: 13, type: 'normal', position: 17 },
        { number: 14, type: 'normal', position: 18 },
        { number: 15, type: 'weekend', position: 19 },
        { number: 16, type: 'weekend', position: 20 },
        { number: 17, type: 'normal', position: 21 },
        { number: 18, type: 'normal', position: 22 },
        { number: 19, type: 'normal', position: 23 },
        { number: 20, type: 'normal', position: 24 },
        { number: 21, type: 'normal', position: 25 },
        { number: 22, type: 'weekend', position: 26 },
        { number: 23, type: 'weekend', position: 27 },
        { number: 24, type: 'normal', position: 28 },
        { number: 25, type: 'normal', position: 29 },
        { number: 26, type: 'normal', position: 30 },
        { number: 27, type: 'normal', position: 31 },
        { number: 28, type: 'normal', position: 32 },
        { number: 29, type: 'weekend', position: 33 },
        { number: 30, type: 'weekend', position: 34 },
        { number: 31, type: 'normal', position: 35 }
      ]
    },
    {
      name: 'Apr',
      number: 4,
      year: 2024,
      days: [
        { number: 1, type: 'normal', position: 1 },
        { number: 2, type: 'normal', position: 2 },
        { number: 3, type: 'normal', position: 3 },
        { number: 4, type: 'normal', position: 4 },
        { number: 5, type: 'weekend', position: 5 },
        { number: 6, type: 'weekend', position: 6 },
        { number: 7, type: 'vacation', position: 7 },
        { number: 8, type: 'vacation', position: 8 },
        { number: 9, type: 'vacation', position: 9 },
        { number: 10, type: 'vacation', position: 10 },
        { number: 11, type: 'vacation', position: 11 },
        { number: 12, type: 'vacation', position: 12 },
        { number: 13, type: 'vacation', position: 13 },
        { number: 14, type: 'normal', position: 14 },
        { number: 15, type: 'normal', position: 15 },
        { number: 16, type: 'normal', position: 16 },
        { number: 17, type: 'normal', position: 17 },
        { number: 18, type: 'normal', position: 18 },
        { number: 19, type: 'weekend', position: 19 },
        { number: 20, type: 'weekend', position: 20 },
        { number: 21, type: 'normal', position: 21 },
        { number: 22, type: 'normal', position: 22 },
        { number: 23, type: 'normal', position: 23 },
        { number: 24, type: 'normal', position: 24 },
        { number: 25, type: 'normal', position: 25 },
        { number: 26, type: 'weekend', position: 26 },
        { number: 27, type: 'weekend', position: 27 },
        { number: 28, type: 'normal', position: 28 },
        { number: 29, type: 'normal', position: 29 },
        { number: 30, type: 'normal', position: 30 }
      ]
    },
    {
      name: 'May',
      number: 5,
      year: 2024,
      days: [
        { number: 1, type: 'holiday', position: 3 },
        { number: 2, type: 'holiday', position: 4 },
        { number: 3, type: 'weekend', position: 5 },
        { number: 4, type: 'weekend', position: 6 },
        { number: 5, type: 'normal', position: 7 },
        { number: 6, type: 'normal', position: 8 },
        { number: 7, type: 'normal', position: 9 },
        { number: 8, type: 'holiday', position: 10 },
        { number: 9, type: 'holiday', position: 11 },
        { number: 10, type: 'weekend', position: 12 },
        { number: 11, type: 'weekend', position: 13 },
        { number: 12, type: 'normal', position: 14 },
        { number: 13, type: 'normal', position: 15 },
        { number: 14, type: 'normal', position: 16 },
        { number: 15, type: 'normal', position: 17 },
        { number: 16, type: 'normal', position: 18 },
        { number: 17, type: 'weekend', position: 19 },
        { number: 18, type: 'weekend', position: 20 },
        { number: 19, type: 'normal', position: 21 },
        { number: 20, type: 'normal', position: 22 },
        { number: 21, type: 'normal', position: 23 },
        { number: 22, type: 'normal', position: 24 },
        { number: 23, type: 'normal', position: 25 },
        { number: 24, type: 'weekend', position: 26 },
        { number: 25, type: 'weekend', position: 27 },
        { number: 26, type: 'normal', position: 28 },
        { number: 27, type: 'normal', position: 29 },
        { number: 28, type: 'normal', position: 30 },
        { number: 29, type: 'normal', position: 31 },
        { number: 30, type: 'normal', position: 32 },
        { number: 31, type: 'weekend', position: 33 }
      ]
    },
    {
      name: 'Jun',
      number: 6,
      year: 2024,
      days: [
        { number: 1, type: 'weekend', position: 6 },
        { number: 2, type: 'normal', position: 7 },
        { number: 3, type: 'normal', position: 8 },
        { number: 4, type: 'normal', position: 9 },
        { number: 5, type: 'normal', position: 10 },
        { number: 6, type: 'normal', position: 11 },
        { number: 7, type: 'weekend', position: 12 },
        { number: 8, type: 'weekend', position: 13 },
        { number: 9, type: 'normal', position: 14 },
        { number: 10, type: 'normal', position: 15 },
        { number: 11, type: 'normal', position: 16 },
        { number: 12, type: 'holiday', position: 17 },
        { number: 13, type: 'holiday', position: 18 },
        { number: 14, type: 'weekend', position: 19 },
        { number: 15, type: 'weekend', position: 20 },
        { number: 16, type: 'normal', position: 21 },
        { number: 17, type: 'normal', position: 22 },
        { number: 18, type: 'normal', position: 23 },
        { number: 19, type: 'normal', position: 24 },
        { number: 20, type: 'normal', position: 25 },
        { number: 21, type: 'weekend', position: 26 },
        { number: 22, type: 'weekend', position: 27 },
        { number: 23, type: 'normal', position: 28 },
        { number: 24, type: 'normal', position: 29 },
        { number: 25, type: 'normal', position: 30 },
        { number: 26, type: 'normal', position: 31 },
        { number: 27, type: 'normal', position: 32 },
        { number: 28, type: 'weekend', position: 33 },
        { number: 29, type: 'weekend', position: 34 },
        { number: 30, type: 'normal', position: 35 }
      ]
    },
    {
      name: 'Jul',
      number: 7,
      year: 2024,
      days: [
        { number: 1, type: 'normal', position: 1 },
        { number: 2, type: 'normal', position: 2 },
        { number: 3, type: 'normal', position: 3 },
        { number: 4, type: 'normal', position: 4 },
        { number: 5, type: 'weekend', position: 5 },
        { number: 6, type: 'weekend', position: 6 },
        { number: 7, type: 'vacation', position: 7 },
        { number: 8, type: 'vacation', position: 8 },
        { number: 9, type: 'vacation', position: 9 },
        { number: 10, type: 'vacation', position: 10 },
        { number: 11, type: 'vacation', position: 11 },
        { number: 12, type: 'vacation', position: 12 },
        { number: 13, type: 'vacation', position: 13 },
        { number: 14, type: 'normal', position: 14 },
        { number: 15, type: 'normal', position: 15 },
        { number: 16, type: 'normal', position: 16 },
        { number: 17, type: 'normal', position: 17 },
        { number: 18, type: 'normal', position: 18 },
        { number: 19, type: 'weekend', position: 19 },
        { number: 20, type: 'weekend', position: 20 },
        { number: 21, type: 'normal', position: 21 },
        { number: 22, type: 'normal', position: 22 },
        { number: 23, type: 'normal', position: 23 },
        { number: 24, type: 'normal', position: 24 },
        { number: 25, type: 'normal', position: 25 },
        { number: 26, type: 'weekend', position: 26 },
        { number: 27, type: 'weekend', position: 27 },
        { number: 28, type: 'normal', position: 28 },
        { number: 29, type: 'normal', position: 29 },
        { number: 30, type: 'normal', position: 30 },
        { number: 31, type: 'normal', position: 31 }
      ]
    },
    {
      name: 'Aug',
      number: 8,
      year: 2024,
      days: [
        { number: 1, type: 'normal', position: 4 },
        { number: 2, type: 'weekend', position: 5 },
        { number: 3, type: 'weekend', position: 6 },
        { number: 4, type: 'normal', position: 7 },
        { number: 5, type: 'normal', position: 8 },
        { number: 6, type: 'normal', position: 9 },
        { number: 7, type: 'normal', position: 10 },
        { number: 8, type: 'normal', position: 11 },
        { number: 9, type: 'weekend', position: 12 },
        { number: 10, type: 'weekend', position: 13 },
        { number: 11, type: 'normal', position: 14 },
        { number: 12, type: 'normal', position: 15 },
        { number: 13, type: 'normal', position: 16 },
        { number: 14, type: 'normal', position: 17 },
        { number: 15, type: 'normal', position: 18 },
        { number: 16, type: 'weekend', position: 19 },
        { number: 17, type: 'weekend', position: 20 },
        { number: 18, type: 'normal', position: 21 },
        { number: 19, type: 'normal', position: 22 },
        { number: 20, type: 'normal', position: 23 },
        { number: 21, type: 'normal', position: 24 },
        { number: 22, type: 'normal', position: 25 },
        { number: 23, type: 'weekend', position: 26 },
        { number: 24, type: 'weekend', position: 27 },
        { number: 25, type: 'normal', position: 28 },
        { number: 26, type: 'normal', position: 29 },
        { number: 27, type: 'normal', position: 30 },
        { number: 28, type: 'normal', position: 31 },
        { number: 29, type: 'normal', position: 32 },
        { number: 30, type: 'weekend', position: 33 },
        { number: 31, type: 'weekend', position: 34 }
      ]
    },
    {
      name: 'Sep',
      number: 9,
      year: 2024,
      days: [
        { number: 1, type: 'normal', position: 0 },
        { number: 2, type: 'normal', position: 1 },
        { number: 3, type: 'normal', position: 2 },
        { number: 4, type: 'normal', position: 3 },
        { number: 5, type: 'normal', position: 4 },
        { number: 6, type: 'weekend', position: 5 },
        { number: 7, type: 'weekend', position: 6 },
        { number: 8, type: 'normal', position: 7 },
        { number: 9, type: 'normal', position: 8 },
        { number: 10, type: 'normal', position: 9 },
        { number: 11, type: 'normal', position: 10 },
        { number: 12, type: 'normal', position: 11 },
        { number: 13, type: 'weekend', position: 12 },
        { number: 14, type: 'weekend', position: 13 },
        { number: 15, type: 'normal', position: 14 },
        { number: 16, type: 'normal', position: 15 },
        { number: 17, type: 'normal', position: 16 },
        { number: 18, type: 'normal', position: 17 },
        { number: 19, type: 'normal', position: 18 },
        { number: 20, type: 'weekend', position: 19 },
        { number: 21, type: 'weekend', position: 20 },
        { number: 22, type: 'vacation', position: 21 },
        { number: 23, type: 'vacation', position: 22 },
        { number: 24, type: 'vacation', position: 23 },
        { number: 25, type: 'vacation', position: 24 },
        { number: 26, type: 'vacation', position: 25 },
        { number: 27, type: 'vacation', position: 26 },
        { number: 28, type: 'vacation', position: 27 },
        { number: 29, type: 'vacation', position: 28 },
        { number: 30, type: 'vacation', position: 29 }
      ]
    },
    {
      name: 'Oct',
      number: 10,
      year: 2024,
      days: [
        { number: 1, type: 'vacation', position: 2 },
        { number: 2, type: 'vacation', position: 3 },
        { number: 3, type: 'vacation', position: 4 },
        { number: 4, type: 'vacation', position: 5 },
        { number: 5, type: 'vacation', position: 6 },
        { number: 6, type: 'normal', position: 7 },
        { number: 7, type: 'normal', position: 8 },
        { number: 8, type: 'normal', position: 9 },
        { number: 9, type: 'normal', position: 10 },
        { number: 10, type: 'normal', position: 11 },
        { number: 11, type: 'weekend', position: 12 },
        { number: 12, type: 'weekend', position: 13 },
        { number: 13, type: 'normal', position: 14 },
        { number: 14, type: 'normal', position: 15 },
        { number: 15, type: 'normal', position: 16 },
        { number: 16, type: 'normal', position: 17 },
        { number: 17, type: 'normal', position: 18 },
        { number: 18, type: 'weekend', position: 19 },
        { number: 19, type: 'weekend', position: 20 },
        { number: 20, type: 'normal', position: 21 },
        { number: 21, type: 'normal', position: 22 },
        { number: 22, type: 'normal', position: 23 },
        { number: 23, type: 'normal', position: 24 },
        { number: 24, type: 'normal', position: 25 },
        { number: 25, type: 'weekend', position: 26 },
        { number: 26, type: 'weekend', position: 27 },
        { number: 27, type: 'normal', position: 28 },
        { number: 28, type: 'normal', position: 29 },
        { number: 29, type: 'normal', position: 30 },
        { number: 30, type: 'normal', position: 31 },
        { number: 31, type: 'normal', position: 32 }
      ]
    },
    {
      name: 'Nov',
      number: 11,
      year: 2024,
      days: [
        { number: 1, type: 'normal', position: 5 },
        { number: 2, type: 'weekend', position: 6 },
        { number: 3, type: 'holiday', position: 7 },
        { number: 4, type: 'holiday', position: 8 },
        { number: 5, type: 'normal', position: 9 },
        { number: 6, type: 'normal', position: 10 },
        { number: 7, type: 'normal', position: 11 },
        { number: 8, type: 'weekend', position: 12 },
        { number: 9, type: 'weekend', position: 13 },
        { number: 10, type: 'normal', position: 14 },
        { number: 11, type: 'normal', position: 15 },
        { number: 12, type: 'normal', position: 16 },
        { number: 13, type: 'normal', position: 17 },
        { number: 14, type: 'normal', position: 18 },
        { number: 15, type: 'weekend', position: 19 },
        { number: 16, type: 'weekend', position: 20 },
        { number: 17, type: 'normal', position: 21 },
        { number: 18, type: 'normal', position: 22 },
        { number: 19, type: 'normal', position: 23 },
        { number: 20, type: 'normal', position: 24 },
        { number: 21, type: 'normal', position: 25 },
        { number: 22, type: 'weekend', position: 26 },
        { number: 23, type: 'weekend', position: 27 },
        { number: 24, type: 'normal', position: 28 },
        { number: 25, type: 'normal', position: 29 },
        { number: 26, type: 'normal', position: 30 },
        { number: 27, type: 'normal', position: 31 },
        { number: 28, type: 'normal', position: 32 },
        { number: 29, type: 'weekend', position: 33 },
        { number: 30, type: 'weekend', position: 34 }
      ]
    },
    {
      name: 'Dec',
      number: 12,
      year: 2025,
      days: [
        { number: 1, type: 'normal', position: 0 },
        { number: 2, type: 'normal', position: 1 },
        { number: 3, type: 'normal', position: 2 },
        { number: 4, type: 'normal', position: 3 },
        { number: 5, type: 'normal', position: 4 },
        { number: 6, type: 'weekend', position: 5 },
        { number: 7, type: 'weekend', position: 6 },
        { number: 8, type: 'normal', position: 7 },
        { number: 9, type: 'normal', position: 8 },
        { number: 10, type: 'normal', position: 9 },
        { number: 11, type: 'normal', position: 10 },
        { number: 12, type: 'normal', position: 11 },
        { number: 13, type: 'weekend', position: 12 },
        { number: 14, type: 'weekend', position: 13 },
        { number: 15, type: 'normal', position: 14 },
        { number: 16, type: 'normal', position: 15 },
        { number: 17, type: 'normal', position: 16 },
        { number: 18, type: 'normal', position: 17 },
        { number: 19, type: 'normal', position: 18 },
        { number: 20, type: 'weekend', position: 19 },
        { number: 21, type: 'weekend', position: 20 },
        { number: 22, type: 'normal', position: 21 },
        { number: 23, type: 'normal', position: 22 },
        { number: 24, type: 'normal', position: 23 },
        { number: 25, type: 'normal', position: 24 },
        { number: 26, type: 'normal', position: 25 },
        { number: 27, type: 'weekend', position: 26 },
        { number: 28, type: 'weekend', position: 27 },
        { number: 29, type: 'normal', position: 28 },
        { number: 30, type: 'normal', position: 29 },
        { number: 31, type: 'holiday', position: 30 }
      ]
    },
  ]

}

export const getMonthName = (month: number): string => {
  const name = (new Date(`${month}.1.2024`)).toLocaleString('en-EN', { month: 'long' })
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export const getNumberOfEmpty = (month: number, year: number): number | undefined => {
  const dayCode = getDayCode(1, month, year)
  const resCode = dayCode! + 5
  if (resCode >= 7) {
    return resCode - 7
  } else {
    return resCode
  }
}

export const getCalendarClasses = (settingsDate: IDate, date: string): string => {
  let classes = ""
  for (const holiday of settingsDate.holidays) {
    if (new Date(holiday.day).toDateString() === new Date(date).toDateString()) {
      classes += " holiday"
    }
  }
  for (const vacation of settingsDate.vacations) {
    if (new Date(vacation.start).toDateString() === new Date(date).toDateString()) {
      classes += " vacation-start"
    }
    if (new Date(vacation.end).toDateString() === new Date(date).toDateString()) {
      classes += " vacation-end"
    }
    if (new Date(vacation.end) > new Date(date) && new Date(vacation.start) < new Date(date)) {
      console.log(new Date(vacation.end))
      console.log(new Date(date))
      console.log(new Date(vacation.start))
      classes += " vacation"
    }
  }
  if (new Date(date).toDateString() === new Date().toDateString()) {
    classes += " current-day"
  }
  return classes
}



const CalendarPage = () => {

  const dispatch = useAppDispatch()
  const status = useAppSelector(state => state.settings.status)
  const date = useAppSelector(state => state.settings.date)

  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const currentYear = new Date().getFullYear()
  const calendar = <>
    <div className="calendarWidget" key={Math.random()}>
      <div className="calendarWidget__header">{getMonthName(12)}</div>
      <div className="calendarWidget__grid">
        {getNumberOfEmpty(12, currentYear)! > 0 ? (new Array(getNumberOfEmpty(12, currentYear))).fill(1).map(x => <div key={Math.random()} />) : <></>}
        {new Array(getDaysInMonth(currentYear, 12)).fill(1).map((e, i) => i + 1).map(day => <div className={`${getCalendarClasses(date, `${currentYear}-${12}-${day}`)}`} key={Math.random()}><div>{day}</div></div>)}
      </div>
    </div>
    {months.map(month =>

      <div className="calendarWidget" key={Math.random()}>
        <div className="calendarWidget__header">{getMonthName(month)}</div>
        <div className="calendarWidget__grid">
          {getNumberOfEmpty(month, currentYear + 1)! > 0 ? (new Array(getNumberOfEmpty(month, currentYear + 1))).fill(1).map(x => <div key={Math.random()} />) : <></>}
          {new Array(getDaysInMonth(currentYear + 1, month)).fill(1).map((e, i) => i + 1).map(day => <div className={`${getCalendarClasses(date, `${currentYear + 1}-${month}-${day}`)}`} key={Math.random()}><div>{day}</div></div>)}
        </div>
      </div>
    )}
  </>

  useEffect(() => {
    if (status === Status.Idle) {
      dispatch(getSettings())
    }
  }, [status, dispatch])
  return (
    <div className="app-container">
      <div className="container">
        <div className="grid-container">
          {calendar}
        </div>
      </div>
    </div >
  )
}
export default CalendarPage
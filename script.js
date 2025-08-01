const academicData = {
  duke: {
    name: "Duke University",
    color: "#001A57",
    breaks: [
      { start: "2025-08-25", end: "2025-08-25", name: "Fall Semester Begins", type: "semester-start" },
      { start: "2025-09-01", end: "2025-09-01", name: "Labor Day", type: "holiday" },
      { start: "2025-10-10", end: "2025-10-15", name: "Fall Break", type: "break" },
      { start: "2025-11-25", end: "2025-12-01", name: "Thanksgiving Recess", type: "break" },
      { start: "2025-12-15", end: "2026-01-07", name: "Winter Break", type: "break" },
      { start: "2026-01-07", end: "2026-01-07", name: "Spring Semester Begins", type: "semester-start" },
      { start: "2026-01-19", end: "2026-01-19", name: "Martin Luther King Jr. Day", type: "holiday" },
      { start: "2026-03-06", end: "2026-03-16", name: "Spring Recess", type: "break" },
      { start: "2026-05-02", end: "2026-05-02", name: "Spring Semester Ends", type: "semester-end" },
      { start: "2026-05-08", end: "2026-05-10", name: "Commencement", type: "event" },
    ],
  },
  gsu: {
    name: "Georgia State University",
    color: "#003366", // Using a distinct blue for GSU
    breaks: [
      { start: "2025-09-01", end: "2025-09-01", name: "Labor Day", type: "holiday" },
      { start: "2025-11-24", end: "2025-11-29", name: "Thanksgiving Break", type: "break" },
      { start: "2025-12-17", end: "2026-01-12", name: "Winter Break", type: "break" },
      { start: "2026-01-19", end: "2026-01-19", name: "Martin Luther King Jr. Day", type: "holiday" },
      { start: "2026-03-16", end: "2026-03-22", name: "Spring Break", type: "break" },
      { start: "2026-05-06", end: "2026-05-06", name: "Spring Semester Ends", type: "semester-end" },
    ],
  },
  uga: {
    name: "University of Georgia",
    color: "#BA0C2F",
    breaks: [
      { start: "2025-08-13", end: "2025-08-13", name: "Fall Semester Begins", type: "semester-start" },
      { start: "2025-09-01", end: "2025-09-01", name: "Labor Day", type: "holiday" },
      { start: "2025-10-31", end: "2025-10-31", name: "Fall Break", type: "break" },
      { start: "2025-11-26", end: "2025-11-28", name: "Thanksgiving Break", type: "break" },
      { start: "2025-12-02", end: "2026-01-05", name: "Winter Break", type: "break" },
      { start: "2026-01-12", end: "2026-01-12", name: "Spring Semester Begins", type: "semester-start" },
      { start: "2026-01-19", end: "2026-01-19", name: "Martin Luther King Jr. Day", type: "holiday" },
      { start: "2026-03-09", end: "2026-03-13", name: "Spring Break", type: "break" },
      { start: "2026-04-27", end: "2026-04-27", name: "Spring Semester Ends", type: "semester-end" },
      { start: "2026-05-07", end: "2026-05-08", name: "Commencement", type: "event" },
    ],
  },
  yale: {
    name: "Yale University",
    color: "#00356B",
    breaks: [
      { start: "2025-08-27", end: "2025-08-27", name: "Fall Term Begins", type: "semester-start" },
      { start: "2025-09-01", end: "2025-09-01", name: "Labor Day", type: "holiday" },
      { start: "2025-10-14", end: "2025-10-20", name: "October Recess", type: "break" },
      { start: "2025-11-21", end: "2025-12-01", name: "November Recess", type: "break" },
      { start: "2025-12-17", end: "2026-01-12", name: "Winter Recess", type: "break" },
      { start: "2026-01-12", end: "2026-01-12", name: "Spring Term Begins", type: "semester-start" },
      { start: "2026-01-19", end: "2026-01-19", name: "Martin Luther King Jr. Day", type: "holiday" },
      { start: "2026-03-06", end: "2026-03-23", name: "Spring Recess", type: "break" },
      { start: "2026-05-06", end: "2026-05-06", name: "Spring Term Ends", type: "semester-end" },
      { start: "2026-05-18", end: "2026-05-18", name: "University Commencement", type: "event" },
    ],
  },
  gatech: {
    name: "Georgia Institute of Technology",
    color: "#B3A369",
    breaks: [
      { start: "2025-08-18", end: "2025-08-18", name: "Fall Semester Begins", type: "semester-start" },
      { start: "2025-09-01", end: "2025-09-01", name: "Labor Day", type: "holiday" },
      { start: "2025-10-06", end: "2025-10-07", name: "Fall Break", type: "break" },
      { start: "2025-11-27", end: "2025-11-28", name: "Thanksgiving Break", type: "break" },
      { start: "2025-12-11", end: "2026-01-12", name: "Winter Break", type: "break" },
      { start: "2026-01-12", end: "2026-01-12", name: "Spring Semester Begins", type: "semester-start" },
      { start: "2026-01-19", end: "2026-01-19", name: "Martin Luther King Jr. Day", type: "holiday" },
      { start: "2026-03-23", end: "2026-03-27", name: "Spring Break", type: "break" },
      { start: "2026-05-07", end: "2026-05-07", name: "Spring Semester Ends", type: "semester-end" },
      { start: "2026-05-07", end: "2026-05-09", name: "Commencement", type: "event" },
    ],
  },
  rutgers: {
    name: "Rutgers University",
    color: "#D50000",
    breaks: [
      { start: "2025-09-02", end: "2025-09-02", name: "Fall Semester Begins", type: "semester-start" },
      { start: "2025-11-27", end: "2025-11-30", name: "Thanksgiving Recess", type: "break" },
      { start: "2025-12-22", end: "2026-01-16", name: "Winter Session", type: "break" },
      { start: "2026-01-20", end: "2026-01-20", name: "Spring Semester Begins", type: "semester-start" },
      { start: "2026-03-14", end: "2026-03-22", name: "Spring Recess", type: "break" },
      { start: "2026-05-04", end: "2026-05-04", name: "Spring Semester Ends", type: "semester-end" },
      { start: "2026-05-17", end: "2026-05-17", name: "Commencement", type: "event" },
      { start: "2026-05-26", end: "2026-08-19", name: "Summer Session", type: "break" },
    ],
  },
  northeastern: {
    name: "Northeastern University",
    color: "#C41E3A",
    breaks: [
      { start: "2025-09-01", end: "2025-09-01", name: "Labor Day", type: "holiday" },
      { start: "2025-09-03", end: "2025-09-03", name: "Fall Semester Begins", type: "semester-start" },
      { start: "2025-10-13", end: "2025-10-13", name: "Indigenous Peoples Day", type: "holiday" },
      { start: "2025-11-11", end: "2025-11-11", name: "Veterans Day", type: "holiday" },
      { start: "2025-11-26", end: "2025-12-01", name: "Fall Break", type: "break" },
      { start: "2025-12-14", end: "2026-01-07", name: "Winter Break", type: "break" },
      { start: "2026-01-07", end: "2026-01-07", name: "Spring Semester Begins", type: "semester-start" },
      { start: "2026-01-19", end: "2026-01-19", name: "Martin Luther King Jr. Day", type: "holiday" },
      { start: "2026-02-16", end: "2026-02-16", name: "Presidents Day", type: "holiday" },
      { start: "2026-03-02", end: "2026-03-09", name: "Spring Break", type: "break" },
      { start: "2026-04-26", end: "2026-04-26", name: "Spring Semester Ends", type: "semester-end" },
      { start: "2026-05-06", end: "2026-08-09", name: "Summer Session", type: "break" },
    ],
  },
  ucsd: {
    name: "UC San Diego",
    color: "#006A96",
    breaks: [
      { start: "2025-09-25", end: "2025-09-25", name: "Fall Quarter Begins", type: "semester-start" },
      { start: "2025-11-11", end: "2025-11-11", name: "Veterans Day", type: "holiday" },
      { start: "2025-11-27", end: "2025-11-28", name: "Thanksgiving Holiday", type: "break" },
      { start: "2025-12-13", end: "2026-01-05", name: "Winter Break", type: "break" },
      { start: "2025-12-24", end: "2025-12-25", name: "Winter Holiday", type: "holiday" },
      { start: "2025-12-31", end: "2026-01-01", name: "New Year Holiday", type: "holiday" },
      { start: "2026-01-05", end: "2026-01-05", name: "Winter Quarter Begins", type: "semester-start" },
      { start: "2026-01-19", end: "2026-01-19", name: "Martin Luther King Jr. Day", type: "holiday" },
      { start: "2026-02-16", end: "2026-02-16", name: "Presidents Day", type: "holiday" },
      { start: "2026-03-21", end: "2026-03-30", name: "Spring Break", type: "break" },
      { start: "2026-03-27", end: "2026-03-27", name: "Cesar Chavez Holiday", type: "holiday" },
      { start: "2026-03-30", end: "2026-03-30", name: "Spring Quarter Begins", type: "semester-start" },
      { start: "2026-05-25", end: "2026-05-25", name: "Memorial Day", type: "holiday" },
      { start: "2026-06-12", end: "2026-06-12", name: "Spring Quarter Ends", type: "semester-end" },
      { start: "2026-06-13", end: "2026-06-14", name: "Commencement", type: "event" },
    ],
  },
  uab: {
    name: "University of Alabama at Birmingham",
    color: "#1E6B52",
    breaks: [
      { start: "2025-08-25", end: "2025-08-25", name: "Fall Semester Begins", type: "semester-start" },
      { start: "2025-09-01", end: "2025-09-01", name: "Labor Day", type: "holiday" },
      { start: "2025-11-24", end: "2025-11-30", name: "Fall/Thanksgiving Break", type: "break" },
      { start: "2025-12-05", end: "2026-01-12", name: "Winter Break", type: "break" },
      { start: "2026-01-12", end: "2026-01-12", name: "Spring Semester Begins", type: "semester-start" },
      { start: "2026-01-19", end: "2026-01-19", name: "Martin Luther King Jr. Day", type: "holiday" },
      { start: "2026-03-09", end: "2026-03-15", name: "Spring Break", type: "break" },
      { start: "2026-04-24", end: "2026-04-24", name: "Spring Semester Ends", type: "semester-end" },
      { start: "2026-05-01", end: "2026-05-02", name: "Commencement", type: "event" },
    ],
  },
}

// Calendar state
const activeColleges = new Set(Object.keys(academicData))

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeToggles()
  generateCalendar()
  updateOverlapInfo()
})

function initializeToggles() {
  const toggles = document.querySelectorAll(".toggle-switch input")

  toggles.forEach((toggle) => {
    const slider = toggle.nextElementSibling
    const collegeId = toggle.id
    const color = academicData[collegeId]?.color || "#4CAF50"

    slider.style.setProperty("--toggle-color", color)

    toggle.addEventListener("change", function () {
      if (this.checked) {
        activeColleges.add(collegeId)
      } else {
        activeColleges.delete(collegeId)
      }
      updateCalendar()
      updateOverlapInfo()
    })
  })
}

function generateCalendar() {
  const calendarGrid = document.getElementById("calendar-grid")
  const startDate = new Date(2025, 7, 1) // August 2025
  const endDate = new Date(2026, 5, 30) // June 2026

  const currentDate = new Date(startDate)

  while (currentDate <= endDate) {
    const monthElement = createMonthElement(currentDate)
    calendarGrid.appendChild(monthElement)

    // Move to next month
    currentDate.setMonth(currentDate.getMonth() + 1)
  }

  updateCalendar()
}

function createMonthElement(date) {
  const monthDiv = document.createElement("div")
  monthDiv.className = "month"

  const monthHeader = document.createElement("div")
  monthHeader.className = "month-header"
  monthHeader.textContent = date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })

  const daysHeader = document.createElement("div")
  daysHeader.className = "days-header"

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  dayNames.forEach((dayName) => {
    const dayHeader = document.createElement("div")
    dayHeader.className = "day-header"
    dayHeader.textContent = dayName
    daysHeader.appendChild(dayHeader)
  })

  const daysGrid = document.createElement("div")
  daysGrid.className = "days-grid"

  // Get first day of month and number of days
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const startingDayOfWeek = firstDay.getDay()
  const daysInMonth = lastDay.getDate()

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    const emptyDay = document.createElement("div")
    emptyDay.className = "day other-month"
    daysGrid.appendChild(emptyDay)
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement("div")
    dayElement.className = "day"
    dayElement.textContent = day
    dayElement.dataset.date = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`

    // Add hover event for showing details
    dayElement.addEventListener("mouseenter", function () {
      showDayTooltip(this, this.dataset.date)
    })

    dayElement.addEventListener("mouseleave", () => {
      hideDayTooltip()
    })

    daysGrid.appendChild(dayElement)
  }

  monthDiv.appendChild(monthHeader)
  monthDiv.appendChild(daysHeader)
  monthDiv.appendChild(daysGrid)

  return monthDiv
}

function updateCalendar() {
  const days = document.querySelectorAll(".day[data-date]")

  days.forEach((day) => {
    const date = day.dataset.date
    const overlappingColleges = getOverlappingColleges(date)

    // Reset classes and styles
    day.className = "day"
    day.style.backgroundColor = ""
    day.style.color = ""

    // Filter out semester-start/end dates from visual display on the calendar
    const relevantOverlaps = overlappingColleges.filter(
      (college) => college.type !== "semester-start" && college.type !== "semester-end",
    )

    // Only apply styling if there are relevant overlaps and at least two colleges are active
    if (relevantOverlaps.length > 0 && activeColleges.size > 1) {
      day.classList.add("has-break")

      // Check if ALL currently active colleges have a relevant overlap on this day
      // This means the number of relevant overlaps must equal the total number of active colleges
      if (relevantOverlaps.length === activeColleges.size) {
        day.classList.add("full-overlap") // Solid green
      } else if (relevantOverlaps.length > 1) {
        day.classList.add("partial-overlap") // Striped lines
      }
    }
    // Single college breaks and semester dates are not displayed
  })
}

function getOverlappingColleges(dateString) {
  const overlapping = []

  activeColleges.forEach((collegeId) => {
    const college = academicData[collegeId]
    if (college) {
      college.breaks.forEach((breakPeriod) => {
        if (isDateInRange(dateString, breakPeriod.start, breakPeriod.end)) {
          overlapping.push({
            id: collegeId,
            name: college.name,
            breakName: breakPeriod.name,
            color: college.color,
            type: breakPeriod.type || "break",
          })
        }
      })
    }
  })

  return overlapping
}

function isDateInRange(date, start, end) {
  return date >= start && date <= end
}

function showDayTooltip(element, date) {
  const overlappingColleges = getOverlappingColleges(date)

  if (overlappingColleges.length === 0) {
    return
  }

  // Remove any existing tooltip
  hideDayTooltip()

  const tooltip = document.createElement("div")
  tooltip.className = "day-tooltip"
  tooltip.innerHTML = `
    <div class="tooltip-date">${new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })}</div>
    ${overlappingColleges
      .map(
        (college) => `
      <div class="tooltip-college" style="border-left: 3px solid ${college.color}">
        <strong>${college.name}</strong><br>
        ${college.breakName}
      </div>
    `,
      )
      .join("")}
  `

  document.body.appendChild(tooltip)

  // Position tooltip
  const rect = element.getBoundingClientRect()
  const tooltipRect = tooltip.getBoundingClientRect()

  let left = rect.left + rect.width / 2 - tooltipRect.width / 2
  let top = rect.top - tooltipRect.height - 10

  // Adjust if tooltip goes off screen
  if (left < 10) left = 10
  if (left + tooltipRect.width > window.innerWidth - 10) {
    left = window.innerWidth - tooltipRect.width - 10
  }
  if (top < 10) {
    top = rect.bottom + 10
  }

  tooltip.style.left = `${left}px`
  tooltip.style.top = `${top}px`
}

function hideDayTooltip() {
  const existingTooltip = document.querySelector(".day-tooltip")
  if (existingTooltip) {
    existingTooltip.remove()
  }
}

function updateOverlapInfo() {
  const overlapDetails = document.getElementById("overlap-details")
  overlapDetails.innerHTML = ""

  // Find all overlapping periods
  const overlaps = findOverlappingPeriods()

  if (overlaps.length === 0) {
    overlapDetails.innerHTML = "<p>No overlapping breaks found with current selection.</p>"
    return
  }

  overlaps.forEach((overlap) => {
    const overlapDiv = document.createElement("div")
    overlapDiv.className = "overlap-detail"

    const title = document.createElement("h4")
    title.textContent = `${overlap.colleges.length} Colleges - ${overlap.startDate} to ${overlap.endDate}`

    const description = document.createElement("p")
    description.textContent = `${overlap.colleges.length} colleges have overlapping breaks during this period.`

    const collegeList = document.createElement("div")
    collegeList.className = "college-list"

    overlap.colleges.forEach((college) => {
      const collegeTag = document.createElement("span")
      collegeTag.className = "college-tag"
      collegeTag.textContent = college.name
      collegeTag.style.backgroundColor = college.color
      collegeList.appendChild(collegeTag)
    })

    overlapDiv.appendChild(title)
    overlapDiv.appendChild(description)
    overlapDiv.appendChild(collegeList)
    overlapDetails.appendChild(overlapDiv)
  })
}

function findOverlappingPeriods() {
  const overlaps = []
  const dateMap = new Map()

  // Build a map of dates to colleges, filtering out semester start/end for overlap calculation
  activeColleges.forEach((collegeId) => {
    const college = academicData[collegeId]
    if (college) {
      college.breaks.forEach((breakPeriod) => {
        if (breakPeriod.type !== "semester-start" && breakPeriod.type !== "semester-end") {
          const startDate = new Date(breakPeriod.start)
          const endDate = new Date(breakPeriod.end)

          for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            const dateString = d.toISOString().split("T")[0]

            if (!dateMap.has(dateString)) {
              dateMap.set(dateString, [])
            }

            dateMap.get(dateString).push({
              id: collegeId,
              name: college.name,
              color: college.color,
              breakName: breakPeriod.name,
            })
          }
        }
      })
    }
  })

  // Find periods with 2+ colleges
  const overlapPeriods = []
  dateMap.forEach((colleges, date) => {
    // Only consider overlaps if they involve at least two colleges AND are not semester start/end dates
    const relevantColleges = colleges.filter((c) => c.type !== "semester-start" && c.type !== "semester-end")
    if (relevantColleges.length >= 2) {
      overlapPeriods.push({
        date: date,
        colleges: relevantColleges, // Use relevantColleges for grouping
        count: relevantColleges.length,
      })
    }
  })

  // Group consecutive dates
  if (overlapPeriods.length > 0) {
    overlapPeriods.sort((a, b) => a.date.localeCompare(b.date))

    let currentOverlap = {
      startDate: overlapPeriods[0].date,
      endDate: overlapPeriods[0].date,
      colleges: overlapPeriods[0].colleges,
    }

    for (let i = 1; i < overlapPeriods.length; i++) {
      const current = overlapPeriods[i]
      const prev = overlapPeriods[i - 1]

      // Check if dates are consecutive and have same colleges
      const currentDate = new Date(current.date)
      const prevDate = new Date(prev.date)
      const dayDiff = (currentDate - prevDate) / (1000 * 60 * 60 * 24)

      if (dayDiff === 1 && arraysEqual(current.colleges, prev.colleges)) {
        currentOverlap.endDate = current.date
      } else {
        overlaps.push(currentOverlap)
        currentOverlap = {
          startDate: current.date,
          endDate: current.date,
          colleges: current.colleges,
        }
      }
    }

    overlaps.push(currentOverlap)
  }

  // Filter to ensure only periods with 2+ relevant colleges are returned
  return overlaps.filter((overlap) => overlap.colleges.length >= 2)
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false
  const aIds = a.map((c) => c.id).sort()
  const bIds = b.map((c) => c.id).sort()
  return aIds.every((id, index) => id === bIds[index])
}

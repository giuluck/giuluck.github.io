const age = new Date(Date.now() - new Date(1997, 8, 15).getTime()).getFullYear() - 1970

function templates($scope) {
    const language = $scope.language

    // lazy initialization of language vocabulary
    if (vocabularies[language] === undefined) {
        vocabularies[language] = Object.fromEntries(
            Object.entries(translations).map(
                ([key, value]) => [key, value[language]]
            )
        )
    }
    const vocabulary = vocabularies[language]

    $scope.vocabulary = vocabulary

    $scope.footer = vocabulary.gdpr

    $scope.sections = {
        about: {icon: "person-circle", text: vocabulary.about},
        education: {icon: "mortarboard-fill", text: vocabulary.education},
        publications: {icon: "file-earmark-bar-graph-fill", text: vocabulary.publications},
        projects: {icon: "archive-fill", text: vocabulary.projects}
    }

    $scope.info = [
        {
            icon: "gender-male",
            html: vocabulary.pronouns
        },
        {
            icon: "calendar-event-fill",
            html: `${age} ${vocabulary.years}`
        },
        {
            icon: "geo-alt-fill",
            html: vocabulary.location
        },
        {
            icon: "envelope-open-fill",
            html: `<a href="mailto:giuluck9@gmail.com" target="_blank">giuluck9@gmail.com</a>`
        },
        {
            icon: "telephone-fill",
            html: `<a href="tel:(+39) 338 2037596" target="_blank">${vocabulary.number}</a>`
        },
        {
            icon: "linkedin",
            html: `<a href="https://linkedin.com/in/luca-giuliani11" target="_blank">luca-giuliani11</a>`
        },
        {
            icon: "github",
            html: `<a href="https://github.com/giuluck" target="_blank">giuluck</a>`
        },
        {
            icon: "globe2",
            html: `<a href="https://giuluck.github.io/#/about?lang=${language}" target="_blank">giuluck.github.io</a>`
        }
    ]

    $scope.skills = {
        "Hard Skills": [
            {name: vocabulary.development, value: 96, comment: `~10 ${vocabulary.years.toLowerCase()}`},
            {name: "Machine Learning", value: 94, comment: `~5 ${vocabulary.years.toLowerCase()}`},
            {name: vocabulary.visualization, value: 90, comment: `~3 ${vocabulary.years.toLowerCase()}`},
            {name: vocabulary.optimization, value: 86, comment: `~3 ${vocabulary.years.toLowerCase()}`},
        ],
        "Soft Skills": [
            {name: vocabulary.organization, value: 94},
            {name: vocabulary.creativity, value: 92},
            {name: "Problem Solving", value: 88},
            {name: "Team Work", value: 86},
        ],
        [vocabulary.languages]: [
            {name: vocabulary.italian, value: 100, comment: vocabulary.native},
            {name: vocabulary.english, value: 86, comment: vocabulary.c1},
        ]
    }
}

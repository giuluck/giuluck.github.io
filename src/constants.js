function build(language) {
    const select = (en, it) => language === "it" ? it : en

    const age = new Date(Date.now() - new Date(1997, 8, 15).getTime()).getFullYear() - 1970
    const years = select("years", "anni")
    const at = select("at", "presso")
    const unibo = select("University of Bologna", "Università di Bologna")

    return {
        // FOOTER DATA
        footer: select(
            "I hereby authorize the use of my personal data in accordance to the GDPR 679/16 - European regulation on the protection of personal data.",
            "Autorizzo il trattamento dei miei dati personali presenti nel curriculum ai sensi del Decreto Legislativo 30 giugno 2003, n. 196 e del GDPR (Regolamento UE 2016/679)."
        ),
        // SECTIONS DATA
        sections: {
            about: {
                icon: "person-circle",
                text: select("About Me", "Chi Sono")
            },
            education: {
                icon: "mortarboard-fill",
                text: select("Education & Work", "Formazione & Lavoro")
            },
            publications: {
                icon: "file-earmark-bar-graph-fill",
                text: select("Publications", "Pubblicazioni")
            },
            projects: {
                icon: "archive-fill",
                text: select("Projects", "Progetti")
            }
        },
        // INFO DATA
        info: [
            {
                icon: "gender-male",
                html: select("He/Him", "Lui"),
            },
            {
                icon: "calendar-event-fill",
                html: select(`${age} Years Old`, `${age} Anni`),
            },
            {
                icon: "geo-alt-fill",
                html: select("Bologna, Italy (IT)", "Bologna (BO), 40129"),
            },
            {
                icon: "envelope-open-fill",
                html: `<a href="mailto:giuluck9@gmail.com" target="_blank">giuluck9@gmail.com</a>`
            },
            {
                icon: "telephone-fill",
                html: `<a href="tel:(+39) 338 2037596" target="_blank">(+39) 338 2037596</a>`
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
        ],
        // DESCRIPTION DATA
        description: select(
            `<p>I am a <a href="https://www.unibo.it/sitoweb/luca.giuliani13/en" target="_blank"><strong>post-doc researcher</strong></a> at the Department of Computer Science and Engineering (DISI) of the University of Bologna.</p>
            <p>I work on <strong>Constrained Machine Learning</strong> applied to <strong>Algorithmic Fairness</strong>, with a PhD dissertation titled “<a href="https://github.com/giuluck/non-linear-correlations/blob/main/dissertation.pdf" target="_blank">Detection and Enforcement of Non-Linear Correlations for Fair and Robust Machine Learning Applications</a>”. I also explored other areas of Artificial Intelligence, such as music generation models and decision-focused learning for combinatorial optimization problems.</p>
            <p>In my free time, I like to go to concerts and make music. I played for 7 years in an electropop duo called <a href="https://open.spotify.com/intl-it/artist/2wvpQCjOmseuzCLC9orKpn" target="_blank">Divinae Miranda</a>, with which I published two albums, and I am now working on my new solo project (<a href="https://sempreverdesound.github.com/" target="_blank">SempreVerde</a>) where I blend italian singing/songwriting tradition with electronic elements.</p>`,
            `<p>Sono un <a href="https://www.unibo.it/sitoweb/luca.giuliani13" target="_blank"><strong>ricercatore post-doc</strong></a> presso il Dipartimento di Informatica: Scienza e Ingegneria (DISI) dell’Università di Bologna.</p>
            <p>Mi occupo di <strong>Machine Learning Vincolato</strong> applicato alla <strong>Fairness Algoritmica</strong>, con una tesi di dottorato dal titolo "<a href="https://github.com/giuluck/non-linear-correlations/blob/main/dissertation.pdf" target="_blank">Detection and Enforcement of Non-Linear Correlations for Fair and Robust Machine Learning Applications</a>". Ho inoltre esplorato altri ambiti dell'Intelligenza Artificiale, quali la generazione di brani musicali e il decision-focused learning per problemi di ottimizzazione.</p>
            <p>Nel tempo libero, mi piace andare ai concerti e fare musica. Ho suonato per 7 anni in un duo elettropop chiamato <a href="https://open.spotify.com/intl-it/artist/2wvpQCjOmseuzCLC9orKpn" target="_blank">Divinae Miranda</a>, con cui ho pubblicato due album, e adesso sto lavorando al mio nuovo progetto solista (<a href="https://sempreverdesound.github.com/" target="_blank">SempreVerde</a>) dove mescolo cantautorato italiano e musica elettronica.</p>`
        ),
        // SKILLS DATA
        skills: {
            "Hard Skills": [
                {
                    name: select("Software Development", "Sviluppo Software"),
                    comment: `~10 ${years}`,
                    value: 96
                },
                {
                    name: "Machine Learning",
                    comment: `~5 ${years}`,
                    value: 94
                },
                {
                    name: "Data Visualization",
                    comment: `~3 ${years}`,
                    value: 90
                },
                {
                    name: select("Optimization", "Ottimizzazione"),
                    comment: `~3 ${years}`,
                    value: 86,
                }
            ],
            "Soft Skills": [
                {
                    name: select("Organization", "Organizzazione"),
                    value: 94
                },
                {
                    name: select("Creativity", "Creatività"),
                    value: 92
                },
                {
                    name: "Problem Solving",
                    value: 88
                },
                {
                    name: "Team Work",
                    value: 86
                }
            ],
            [select("Languages", "Lingue")]: [
                {
                    name: select("Italian", "Italiano"),
                    comment: select("Native", "Nativo"),
                    value: 100
                },
                {
                    name: select("English", "Inglese"),
                    comment: select("C1 Lev.", "Liv. C1"),
                    value: 86
                }
            ]
        },
        // EDUCATION DATA
        education: [
            {
                tag: select("Research Fellow", "Assegnista di Ricerca"),
                preposition: at,
                institution: unibo,
                period: `11/2024 - ${select("Ongoing", "In Corso")}`,
                description: select(
                    {},
                    {}
                )
            },
            {
                tag: select("Teaching Assistant", "Tutor Didattico"),
                preposition: at,
                institution: unibo,
                period: `09/2021 - ${select("Ongoing", "In Corso")}`,
                description: select(
                    {},
                    {}
                )
            },
            {
                tag: select("PhD", "Dottorato"),
                preposition: "in",
                institution: "Computer Science & Engineering",
                period: "11/2021 - 04/2025",
                description: select(
                    {},
                    {}
                )
            },
            {
                tag: select("Master Degree", "Laurea Magistrale"),
                preposition: "in",
                institution: "Artificial Intelligence",
                mark: `110/110 ${select("with Honors", "con Lode")}`,
                period: "09/2019 - 07/2021",
                description: select(
                    {},
                    {}
                )
            },
            {
                tag: select("Academic Internship", "Tirocinio Accademico"),
                preposition: at,
                institution: unibo,
                period: "02/2019 - 05/2019",
                description: select(
                    {},
                    {}
                ),
            },
            {
                tag: select("Bachelor Degree", "Laurea"),
                preposition: "in",
                institution: select("Computer Science & Engineering", "Ingegneria e Scienze Informatiche"),
                mark: `110/110 ${select("with Honors", "con Lode")}`,
                period: "09/2016 - 10/2019",
                description: select(
                    {
                        Institution: `University of Bologna (Cesena Campus).`,
                        Thesis: `“<em><a href="https://amslaurea.unibo.it/id/eprint/19071/" target="_blank">Design and Implementation of a Domain Specific Language for the Construction of Gene Regulatory Networks</a></em>”.`,
                        Topics: `<ul>
                            <li><em>Languages and Technologies</em>: C, C++, C#, Java, Kotlin, Python, SQL/PL-SQL, Git/GitHub, LaTeX, UML, MATLAB, Javascript/jQuery, HTML, CSS, PHP, Bash, Assembly.</li>
                            <li><em>Mathematical Foundations of Computer Science</em>: Calculus, Linear Algebra, Statistics, Operations Research, Computational Methods.</li>
                            <li><em>Algorithms and Data Structures</em>: Lists, Stacks, Queues, Heaps, Trees, Graphs, Search and Sorting Algorithms, Recursive Algorithms, Complexity Theory.</li>
                        </ul>`
                    }, {
                        Istituzione: `Università di Bologna (Campus di Cesena)`,
                        Tesi: `“<em><a href="https://amslaurea.unibo.it/id/eprint/19071/" target="_blank">Progettazione e Implementazione di un Domain Specific Language per la Costruzione di Reti Geniche</a></em>”.`,
                        Temi: `<ul>
                            <li><em>Linguaggi e Tecnologie</em>: C, C++, C#, Java, Kotlin, Python, SQL/PL-SQL, Git/GitHub, LaTeX, UML, MATLAB, Javascript/jQuery, HTML, CSS, PHP, Bash, Assembly.</li>
                            <li><em>Fondamenti Matematici delle Scienze Informatiche</em>: Analisi Matematica, Algebra Lineare, Statistica, Ricerca Operativa, Metodi Computazionali.</li>
                            <li><em>Algorithms and Data Structures</em>: Liste, Stack, Code, Heap, Alberi, Grafi, Algoritmi di Ricerca e di Ordinamento, Algoritmi Ricorsivi, Teoria della Complessità.</li>
                        </ul>`

                    }
                )
            },
            {
                tag: select("Professional Stage", "Stage Professionale"),
                preposition: at,
                institution: select("Loccioni Group", "Gruppo Loccioni"),
                period: "06/2015 - 07/2015",
                description: select(
                    {
                        Company: `Loccioni Group, Angeli di Rosora (IT).`,
                        Project: `development of a <em>web application in AngularJS</em> for monitoring the environmental conditions of a workplace.`
                    }, {
                        Azienda: `Gruppo Loccioni, Angeli di Rosora (AN)`,
                        Progetto: `sviluppo di un'<em>applicazione web in AngularJS</em> per il controllo delle condizioni ambientali di un luogo di lavoro.`
                    }
                )
            },
            {
                institution: select("Scientific High School", "Liceo Scientifico (Scienze Applicate)"),
                mark: "100/100",
                period: "09/2011 - 07/2016",
                description: select({
                        School: `“Leonardo Da Vinci” High School, Jesi (IT).`,
                        Activities: `<ul>
                            <li>Appointed <em>class representative</em> for three years.</li>
                            <li>Member of the <em>organizational committee</em> of the institute representatives for two years.</li>
                            <li>Selected for the <em>national finals of the Mathematical Games</em> (Giochi Matematici) held at the Bocconi University, and for the regional finals of many other Olympics such as: Mathematics, Computer Science, Physics, Chemistry, Philosophy, and Culture.</li>
                        </ul>`
                    }, {
                        Scuola: `Liceo Scientifico “Leonardo Da Vinci”, Jesi (AN).`,
                        Attività: `<ul>
                            <li>Nominato <em>rappresentante di classe</em> per tre anni.</li>
                            <li>Membro del <em>comitato organizzativo</em> della rappresentanza di istituto per due anni.</li>
                            <li>Selezionato per le <em>finali nazionali dei Giochi Matematici</em> presso l'Università Bocconi, e per le finali regionali di varie altre Olimpiadi come: Matematica, Informatica, Fisica, Chimica, Filosofia, e della Cultura.</li>
                        </ul>`
                    }
                )
            }
        ]
    }
}

function update($scope) {
    // lazy initialization of language-specific data
    const language = $scope.language
    let entries = constants[language]
    if (entries === undefined) {
        entries = build(language)
        constants[language] = entries
    }
    // add each entry to the scope
    Object.entries(entries).forEach(([key, value]) => {
        $scope[key] = value
    })
}

const constants = {}

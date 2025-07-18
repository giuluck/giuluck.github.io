function sections(select = (en, it) => undefined) {
    return {
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
    }
}

function build(language) {
    const select = (en, it) => language === "it" ? it : en

    const age = new Date(Date.now() - new Date(1997, 8, 15).getTime()).getFullYear() - 1970
    const years = select("years", "anni")
    const at = select("at", "presso")
    const unibo = select("University of Bologna", "Università di Bologna")

    return {
        // SECTIONS DATA
        sections: sections(select),
        // FOOTER DATA
        footer: select(
            "I hereby authorize the use of my personal data in accordance to the GDPR 679/16 - European regulation on the protection of personal data.",
            "Autorizzo il trattamento dei miei dati personali presenti nel curriculum ai sensi del Decreto Legislativo 30 giugno 2003, n. 196 e del GDPR (Regolamento UE 2016/679)."
        ),
        // INFO DATA
        info: [{
            icon: "gender-male",
            html: select("He/Him", "Lui"),
        }, {
            icon: "calendar-event-fill",
            html: select(`${age} Years`, `${age} Anni`),
        }, {
            icon: "geo-alt-fill",
            html: select("Bologna, Italy (IT)", "Bologna (BO), 40129"),
        }, {
            icon: "globe2",
            html: `<a href="https://giuluck.github.io/#/about?lang=${language}" target="_blank">giuluck.github.io</a>`
        }, {
            icon: "github",
            html: `<a href="https://github.com/giuluck" target="_blank">giuluck</a>`
        }, {
            icon: "linkedin",
            html: `<a href="https://linkedin.com/in/luca-giuliani11" target="_blank">luca-giuliani11</a>`
        }, {
            icon: "telephone-fill",
            html: `<a href="tel:(+39) 338 2037596" target="_blank">(+39) 338 2037596</a>`
        }, {
            icon: "envelope-open-fill",
            html: `<a href="mailto:giuluck9@gmail.com" target="_blank">giuluck9@gmail.com</a>`
        }],
        // BIOGRAPHY DATA
        biography: select(
            `<p>I am a <a href="https://www.unibo.it/sitoweb/luca.giuliani13/en" target="_blank"><strong>post-doc researcher</strong></a> at the Computer Science and Engineering Department of the University of Bologna.</p>
            <p>I mainly work on <strong>Constrained Machine Learning</strong> applied to <strong>Algorithmic Fairness</strong>, with a PhD dissertation titled “<a href="https://github.com/giuluck/non-linear-correlations/blob/main/dissertation.pdf" target="_blank">Detection and Enforcement of Non-Linear Correlations for Fair and Robust Machine Learning Applications</a>”, but I also explored other areas of Artificial Intelligence, such as music generation models and decision-focused learning for combinatorial optimization problems.</p>`,
            `<p>Sono un <a href="https://www.unibo.it/sitoweb/luca.giuliani13" target="_blank"><strong>ricercatore post-doc</strong></a> presso il Dipartimento di Informatica dell’Università di Bologna.</p>
            <p>Mi occupo principalmente di <strong>Machine Learning Vincolato</strong> applicato alla <strong>Fairness Algoritmica</strong>, con una tesi di dottorato dal titolo "<a href="https://github.com/giuluck/non-linear-correlations/blob/main/dissertation.pdf" target="_blank">Detection and Enforcement of Non-Linear Correlations for Fair and Robust Machine Learning Applications</a>", ma ho esplorato anche altri ambiti dell'Intelligenza Artificiale, quali la generazione di brani musicali e il decision-focused learning per problemi di ottimizzazione.</p>`
        ),
        // SKILLS DATA
        skills: {
            "Hard Skills": [{
                name: select("Programming", "Programmazione"),
                comment: `~10 ${years}`,
                value: 96
            }, {
                name: "Machine Learning",
                comment: `~5 ${years}`,
                value: 94
            }, {
                name: "Data Visualization",
                comment: `~3 ${years}`,
                value: 90
            }, {
                name: select("Optimization", "Ottimizzazione"),
                comment: `~3 ${years}`,
                value: 86,
            }],
            "Soft Skills": [{
                name: select("Organization", "Organizzazione"),
                value: 94
            }, {
                name: select("Creativity", "Creatività"),
                value: 92
            }, {
                name: "Problem Solving",
                value: 88
            }, {
                name: "Team Work",
                value: 86
            }],
            [select("Programming", "Programmazione")]: [{
                name: "Python + sklearn / keras / torch",
                value: 96
            }, {
                name: "Java / Kotlin / Scala",
                value: 94
            }, {
                name: "Git / Docker / GitHub Actions",
                value: 86
            }, {
                name: select("Web Stack", "Stack Web"),
                value: 80,
            }],
            [select("Languages", "Lingue")]: [{
                name: select("Italian", "Italiano"),
                comment: select("Native", "Nativo"),
                value: 100
            }, {
                name: select("English", "Inglese"),
                comment: select("C1 Lev.", "Liv. C1"),
                value: 86
            }]
        },
        // EDUCATION DATA
        education: [{
            relevant: true,
            role: select("Research Fellow", "Assegnista di Ricerca"),
            preposition: at,
            institution: unibo,
            link: `https://www.unibo.it/${language}`,
            period: `11/2024 - ${select("Ongoing", "In Corso")}`,
            description: select({
                "Funding Project": `<ul>
                    <li><a href="https://prode.unife.it/" target="_blank">PRODE</a>: Probabilistic Declarative Process Mining (Italian RPNI).</li>
                </ul>`,
                "Research Topics": `<ul>
                    <li>Declarative Process Mining with Probabilistic Support.</li>
                    <li>Integration of Causal Knowledge in Declarative Process Mining.</li>
                </ul>`
            }, {
                "Progetto Finanziatore": `<ul>
                    <li><a href="https://prode.unife.it/" target="_blank">PRODE</a>: Probabilistic Declarative Process Mining (PRIN).</li>
                </ul>`,
                "Temi di Ricerca": `<ul>
                    <li>Process Mining Dichiarativo con Supporto Probabilistico.</li>
                    <li>Integrazione di Conoscenza Causale nel Process Mining Dichiarativo.</li>
                </ul>`
            })
        }, {
            relevant: true,
            role: select("Teaching Assistant", "Tutor Didattico"),
            preposition: at,
            institution: unibo,
            link: `https://www.unibo.it/${language}`,
            period: `09/2021 - ${select("Ongoing", "In Corso")}`,
            description: select({
                '<a href="https://www.unibo.it/en/study/course-units-transferable-skills-moocs/course-unit-catalogue/course-unit/2024/446609" target="_blank">Artificial Intelligence in Industry</a>': `2021/22, 2022/23, 2023/24, 2024/25.`,
                '<a href="https://www.unibo.it/en/study/course-units-transferable-skills-moocs/course-unit-catalogue/course-unit/2024/468002" target="_blank">Fundamentals of Artificial Intelligence (IT)</a>': `2024/25.`,
                '<a href="https://www.unibo.it/en/study/course-units-transferable-skills-moocs/course-unit-catalogue/course-unit/2023/446566" target="_blank">Fundamentals of Artificial Intelligence (EN)</a>': `2022/23, 2023/24.`,
                'Coordination and Support to Computer Science Exam Preparation': `2021/22.`
            }, {
                '<a href="https://www.unibo.it/it/studiare/insegnamenti-competenze-trasversali-moocs/insegnamenti/insegnamento/2024/446609" target="_blank">Artificial Intelligence in Industry</a>': `2021/22, 2022/23, 2023/24, 2024/25.`,
                '<a href="https://www.unibo.it/it/studiare/insegnamenti-competenze-trasversali-moocs/insegnamenti/insegnamento/2024/468002" target="_blank">Fondamenti di Intelligenza Artificiale</a>': `2024/25.`,
                '<a href="https://www.unibo.it/it/studiare/insegnamenti-competenze-trasversali-moocs/insegnamenti/insegnamento/2023/446566" target="_blank">Fundamentals of Artificial Intelligence</a>': `2022/23, 2023/24.`,
                'Coordinamento al Supporto alla Preparazione degli Esami di Ambito Informatico': `2021/22.`
            })
        }, {
            relevant: true,
            role: select("PhD", "Dottorato"),
            preposition: "in",
            institution: "Computer Science & Engineering",
            link: `https://phd.unibo.it/cse/${language}`,
            period: "11/2021 - 04/2025",
            description: select({
                Institution: `University of Bologna.`,
                Thesis: `“<a href="https://github.com/giuluck/non-linear-correlations/blob/main/dissertation.pdf" target="_blank">Detection and Enforcement of Non-Linear Correlations for Fair and Robust Machine Learning Applications</a>”.`,
                "Research Topics": `<ul>
                    <li>Algorithmic Fairness with Discrete and Continuous Sensitive Attributes.</li>
                    <li>Integrated Symbolic and Sub-symbolic Techniques for Trustworthy AI.</li>
                    <li>Decision-Focused Learning for Combinatorial Optimization Problems.</li>
                    <li>Computational Methods for Correlation Detection and Causal Discovery.</li>
                </ul>`,
                "Involved Projects": `<ul>
                    <li><a href="https://tailor-network.eu/" target="_blank">TAILOR</a>: Trustworthy AI through the Integration of Learning, Optimisation and Reasoning (EU Horizon — Funding).</li>
                    <li><a href="https://www.ai4europe.eu/" target="_blank">AI4EUROPE</a>: An AI On-Demand Platform to Support Research Excellence in Europe (EU Horizon — Funding).</li>
                    <li><a href="https://www.aequitas-project.eu/" target="_blank">AEQUITAS</a>: Assessment and Engineering of Equitable, Unbiased, Impartial and Trustworthy AI Systems (EU Horizon — Correlated).</li>
                    <li><a href="https://tuples.ai/" target="_blank">TUPLES</a>: Trustworthy Planning and Scheduling with Learning and Explanations (EU Horizon — Correlated).</li>
                    <li><a href="https://stairwai.nws.cs.unibo.it/" target="_blank">StairwAI</a>: Ease the Engagement of Low-Tech Users to the AI-on-Demand Platform through AI (EU Horizon — Correlated).</li>
                    <li><a href="https://fondazione-fair.it/en/project/" target="_blank">FAIR</a>: Future Artificial Intelligence Research (Italian NRRP — Correlated).</li>
                </ul>`
            }, {
                relevant: true,
                Istituzione: `Università di Bologna`,
                Tesi: `“<a href="https://github.com/giuluck/non-linear-correlations/blob/main/dissertation.pdf" target="_blank">Detection and Enforcement of Non-Linear Correlations for Fair and Robust Machine Learning Applications</a>”.`,
                "Temi di Ricerca": `<ul>
                    <li>Fairness Algoritmica con Attributi Sensibili Discreti e Continui.</li>
                    <li>Metodologie Integrate di Intelligenza Artificiale Simbolica e Sub-simbolica per la Trustworthiness.</li>
                    <li>Decision-Focused Learning per Problemi di Ottimizzazione Combinatoria.</li>
                    <li>Metodi Computazionali per la Misura di Correlazioni e per la Causal Discovery.</li>
                </ul>`,
                "Progetti Coinvolti": `<ul>
                    <li><a href="https://tailor-network.eu/" target="_blank">TAILOR</a>: Trustworthy AI through the Integration of Learning, Optimisation and Reasoning (EU Horizon — Finanziatore).</li>
                    <li><a href="https://www.ai4europe.eu/" target="_blank">AI4EUROPE</a>: An AI On-Demand Platform to Support Research Excellence in Europe (EU Horizon — Finanziatore).</li>
                    <li><a href="https://www.aequitas-project.eu/" target="_blank">AEQUITAS</a>: Assessment and Engineering of Equitable, Unbiased, Impartial and Trustworthy AI Systems (EU Horizon — Correlato).</li>
                    <li><a href="https://tuples.ai/" target="_blank">TUPLES</a>: Trustworthy Planning and Scheduling with Learning and Explanations  (EU Horizon — Correlato).</li>
                    <li><a href="https://stairwai.nws.cs.unibo.it/" target="_blank">StairwAI</a>: Ease the Engagement of Low-Tech Users to the AI-on-Demand Platform through AI  (EU Horizon — Correlato).</li>
                    <li><a href="https://fondazione-fair.it/progetto/" target="_blank">FAIR</a>: Future Artificial Intelligence Research (PNRR — Correlato).</li>
                </ul>`
            })
        }, {
            relevant: true,
            role: select("MSc", "Laurea Magistrale"),
            preposition: "in",
            institution: "Artificial Intelligence",
            link: `https://corsi.unibo.it/${select("2cycle", "magistrale")}/artificial-intelligence`,
            mark: select("110/110 with Honors", "110/110 e Lode"),
            period: "09/2019 - 07/2021",
            description: select({
                Institution: `University of Bologna.`,
                Thesis: `“<a href="https://amslaurea.unibo.it/id/eprint/23885/" target="_blank">Extending the Moving Targets Method for Injecting Constraints in Machine Learning</a>”.`,
                Topics: `<ul>
                    <li><em>Languages and Technologies</em>: Python, Scala, Gurobi, CPLEX, MATLAB, IOTA, Prolog, NetLogo.</li>
                    <li><em>Machine/Deep Learning Theory and Frameworks</em>: Numpy, Pandas, Scikit-Learn, Tensorflow/Keras, PyTorch/Lightning, Matplotlib, Seaborn.</li>
                    <li><em>Foundations of Artificial Intelligence</em>: Combinatorial and Mathematical Optimization, Reasoning and Logic Programming, Genetic and Evolutionary Algorithms, Search Strategies, Planning.</li>
                    <li><em>Transdisciplinary Aspects of Artificial Intelligence</em>: AI Ethics and Regulations, Algorithmic Fairness, Cognitive Neuroscience.</li>
                </ul>`
            }, {
                Istituzione: `Università di Bologna`,
                Tesi: `“<a href="https://amslaurea.unibo.it/id/eprint/23885/" target="_blank">Extending the Moving Targets Method for Injecting Constraints in Machine Learning</a>”.`,
                Temi: `<ul>
                    <li><em>Linguaggi e Tecnologie</em>: Python, Scala, Gurobi, CPLEX, MATLAB, IOTA, Prolog, NetLogo.</li>
                    <li><em>Teoria e Framework per Machine/Deep Learning</em>: Numpy, Pandas, Scikit-Learn, Tensorflow/Keras, PyTorch/Lightning, Matplotlib, Seaborn.</li>
                    <li><em>Fondamenti di Intelligenza Artificiale</em>: Ottimizzazione Combinatoria e Mathematica, Programmazione Logica e Reasoning, Algoritmi Genetici ed Evolutivi, Strategie di Ricerca, Planning.</li>
                    <li><em>Aspetti Transdisciplinari dell'Intelligenza Artificiale</em>: Etica e Diritto dell'IA, Fairness Algoritmica, Neuroscienze Cognitive.</li>
                </ul>`
            })
        }, {
            relevant: true,
            role: select("Academic Internship", "Tirocinio Accademico"),
            preposition: at,
            institution: unibo,
            link: `https://www.unibo.it/${language}`,
            period: "02/2019 - 05/2019",
            description: select({
                Institution: `University of Bologna, Cesena Campus.`,
                Project: `<ul>
                        <li>Extension of the biochemical component of the <a href="https://github.com/AlchemistSimulator/Alchemist" target="_blank">Alchemist</a> simulator.</li>
                        <li>Development of automated tests in <em>Kotlin language</em> to guarantee the correct functioning of internal operations.</li>
                        <li>Employment of the software to <em>simulate biochemical experiments</em>.</li>
                    </ul>`
            }, {
                Istituzione: `Università di Bologna, Campus di Cesena.`,
                Progetto: `<ul>
                        <li>Estensione della componente biochimica del simulatore <a href="https://github.com/AlchemistSimulator/Alchemist" target="_blank">Alchemist</a>.</li>
                        <li>Sviluppo di test automatizzati in <em>linguaggio Kotlin</em> per garantire il corretto funzionamento delle operazioni interne.</li>
                        <li>Utilizzo del software per <em>simulare esperimenti biochimici</em>.</li>
                    </ul>`
            })
        }, {
            relevant: true,
            role: select("BSc", "Laurea"),
            preposition: "in",
            institution: select("Computer Science & Engineering", "Ingegneria e Scienze Informatiche"),
            link: `https://corsi.unibo.it/${select("1cycle/ComputerScienceEngineering", "laurea/IngegneriaScienzeInformatiche")}`,
            mark: select("110/110 with Honors", "110/110 e Lode"),
            period: "09/2016 - 10/2019",
            description: select({
                Institution: `University of Bologna, Cesena Campus.`,
                Thesis: `“<a href="https://amslaurea.unibo.it/id/eprint/19071/" target="_blank">Design and Implementation of a Domain Specific Language for the Construction of Gene Regulatory Networks</a>”.`,
                Topics: `<ul>
                    <li><em>Languages and Technologies</em>: C, C++, C#, Java, Kotlin, Python, SQL/PL-SQL, Git/GitHub, LaTeX, UML, MATLAB, Javascript/jQuery, HTML, CSS, PHP, Bash, Assembly.</li>
                    <li><em>Mathematical Foundations of Computer Science</em>: Calculus, Linear Algebra, Statistics, Operations Research, Computational Methods.</li>
                    <li><em>Algorithms and Data Structures</em>: Lists, Stacks, Queues, Heaps, Trees, Graphs, Search and Sorting Algorithms, Recursive Algorithms, Complexity Theory.</li>
                </ul>`
            }, {
                Istituzione: `Università di Bologna, Campus di Cesena.`,
                Tesi: `“<a href="https://amslaurea.unibo.it/id/eprint/19071/" target="_blank">Progettazione e Implementazione di un Domain Specific Language per la Costruzione di Reti Geniche</a>”.`,
                Temi: `<ul>
                    <li><em>Linguaggi e Tecnologie</em>: C, C++, C#, Java, Kotlin, Python, SQL/PL-SQL, Git/GitHub, LaTeX, UML, MATLAB, Javascript/jQuery, HTML, CSS, PHP, Bash, Assembly.</li>
                    <li><em>Fondamenti Matematici delle Scienze Informatiche</em>: Analisi Matematica, Algebra Lineare, Statistica, Ricerca Operativa, Metodi Computazionali.</li>
                    <li><em>Algorithms and Data Structures</em>: Liste, Stack, Code, Heap, Alberi, Grafi, Algoritmi di Ricerca e di Ordinamento, Algoritmi Ricorsivi, Teoria della Complessità.</li>
                </ul>`
            })
        }, {
            relevant: true,
            role: select("Professional Stage", "Stage Professionale"),
            preposition: at,
            institution: select("Loccioni Group", "Gruppo Loccioni"),
            link: `https://www.loccioni.com/${language}`,
            period: "06/2015 - 07/2015",
            description: select({
                Company: `Loccioni Group, Angeli di Rosora (IT).`,
                Project: `Development of a <em>web application in AngularJS</em> for monitoring the environmental conditions of a workplace.`
            }, {
                Azienda: `Gruppo Loccioni, Angeli di Rosora (AN)`,
                Progetto: `Sviluppo di un'<em>applicazione web in AngularJS</em> per il controllo delle condizioni ambientali di un luogo di lavoro.`
            })
        }, {
            relevant: false,
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
            })
        }],
        // PUBLICATIONS DATA
        publications: [{
            relevant: true,
            title: `Generalized Disparate Impact for Configurable Fairness Solutions in ML`,
            authors: `<u>L. Giuliani</u>, E. Misino, M. Lombardi`,
            publisher: `ICML, 2023 (A* Conference)`,
            link: `https://proceedings.mlr.press/v202/giuliani23a.html`,
            abstract: `We make two contributions in the field of AI fairness over continuous protected attributes. First, we show that the Hirschfeld-Gebelein-Renyi (HGR) indicator (the only one currently available for such a case) is valuable but subject to a few crucial limitations regarding semantics, interpretability, and robustness. Second, we introduce a family of indicators that are: 1) complementary to HGR in terms of semantics; 2) fully interpretable and transparent; 3) robust over finite samples; 4) configurable to suit specific applications. Our approach also allows us to define fine-grained constraints to permit certain types of dependence and forbid others selectively. By expanding the available options for continuous protected attributes, our approach represents a significant contribution to the area of fair artificial intelligence.`
        }, {
            relevant: true,
            title: `Towards Symbiotic Creativity: A Methodological Approach to Compare Human and AI Robotic Dance Creations`,
            authors: `A. De Filippo, <u>L. Giuliani</u>, E. Mancini, A. Borghesi, P. Mello, M. Milano`,
            publisher: `IJCAI, 2023 (A* Conference)`,
            link: `https://www.ijcai.org/proceedings/2023/644`,
            abstract: `Artificial Intelligence (AI) has gradually attracted attention in the field of artistic creation, resulting in a debate on the evaluation of AI artistic outputs. However, there is a lack of common criteria for objective artistic evaluation both of human and AI creations. This is a frequent issue in the field of dance, where different performance metrics focus either on evaluating human or computational skills separately. This work proposes a methodological approach for the artistic evaluation of both AI and human artistic creations in the field of robotic dance. First, we define a series of common initial constraints to create robotic dance choreographies in a balanced initial setting, in collaboration with a group of human dancers and choreographer. Then, we compare both creation processes through a human audience evaluation. Finally, we investigate which choreography aspects (e.g., the music genre) have the largest impact on the evaluation, and we provide useful guidelines and future research directions for the analysis of interconnections between AI and human dance creation.`
        }, {
            relevant: true,
            title: `Achieving Intersectional Algorithmic Fairness By Constructing A Maximal Correlation Latent Space`,
            authors: `<u>L. Giuliani</u>, M. Lombardi`,
            publisher: `${select(
                "Accepted (Not Published Yet) at",
                "Accettato (Non Ancora Pubblicato) a"
            )} ECAI, 2025 (A Conference)`,
            abstract: `Recent developments in algorithmic fairness started to investigate the interaction between multiple sensitive information through an intersectional perspective. We introduce a new definition of intersectional fairness based on a multivariate extension of the Generalized Disparate Impact (GeDI). Our approach leverages a neural network to transform multiple protected groups into a univariate latent space that maximizes correlation with the target, effectively capturing unfairness across all potential subgroups even with limited data samples. Empirical evaluations on several benchmarks demonstrate that our method can be effectively used as a loss regularizer during neural network training, offering stronger performance guarantees compared to existing intersectional statistical parity definitions while also allowing to manage continuous inputs and targets.`
        }, {
            relevant: true,
            title: `MusiComb: a Sample-based Approach to Music Generation Through Constraints`,
            authors: `<u>L. Giuliani</u>, F. Ballerini, A. De Filippo, A. Borghesi`,
            publisher: `ICTAI, 2023 (B Conference)`,
            link: `https://www.computer.org/csdl/proceedings-article/ictai/2023/427300a194/1T3dgtsCtcQ`,
            abstract: `Recent developments in the field of deep learning have steered research on music generation systems towards a massive use of large end-to-end neural architectures. The capability of these systems to produce convincing outputs has been extensively proven. Nonetheless, they usually come with several drawbacks, such as a low degree of user control, a lack of global structure, and the inherent impossibility of online generation due to high computational costs. Our contribution is two-fold: first, we identify these limitations and show how they have been discussed and partially addressed in the existing literature; then, we propose a novel music generation approach aimed at overcoming such limitations, by properly combining a set of samples under user-defined constraints. We model our task as a job-shop problem, and we show that interesting results can be obtained at very low computational costs. Our framework is genre-independent as it deals with samples metadata rather then individual notes, even though additional genre-specific constraint could be introduced by users to meet their stylistic requirements.`
        }, {
            relevant: true,
            title: `Long-Term Fairness Strategies in Ranking with Continuous Sensitive Attributes`,
            authors: `<u>L. Giuliani</u>, E. Misino, R. Calegari, M. Lombardi`,
            publisher: `AEQUITAS Workshop @ ECAI, 2024 (A Conference)`,
            link: `https://ceur-ws.org/Vol-3808/paper11.pdf`,
            abstract: `Recent advancements have made significant progress in addressing fair ranking and fairness with continuous sensitive attributes as separate challenges. However, their intersection remains underexplored, although crucial for guaranteeing a wider applicability of fairness requirements. In many real-world contexts, sensitive attributes such as age, weight, income, or degree of disability are measured on a continuous scale rather than in discrete categories. Addressing the continuous nature of these attributes is essential for ensuring effective fairness in such scenarios. This work aims to fill the gap in the existing literature by proposing a novel methodology that integrates state-of-the-art techniques to address longterm fairness in the presence of continuous protected attributes. We demonstrate the effectiveness and flexibility of our approach using real-world data.`
        }, {
            relevant: true,
            title: `Beyond Temporal Relationships: Causal Support in Declarative Process Modeling`,
            authors: `<u>L. Giuliani</u>, A. Zecchini`,
            publisher: `${select(
                "Accepted (Not Published Yet) at",
                "Accettato (Non Ancora Pubblicato) a"
            )} PMAI Workshop @ ECAI, 2025 (A Conference)`,
            abstract: `Process discovery algorithms extract knowledge about processes by analyzing temporal relationships only, often disregarding any additional data available in the log. We propose a novel approach that leverages causal discovery to detect the underlying relationships between data features and events. The acquired knowledge is then used to complement an existing declarative process model by measuring the causal support between pairs of events, potentially allowing to remove inconsistent constraints to enhance robustness and clarity of the model. We discuss the details of this approach using an example on synthetic data to show its advantages and limitations.`
        }, {
            relevant: false,
            title: `A Geometric Framework for Fairness`,
            authors: `A. Maggio, <u>L. Giuliani</u>, R. Calegari, M. Lombardi, M. Milano`,
            publisher: `AEQUITAS Workshop @ ECAI, 2023 (A Conference)`,
            link: `https://ceur-ws.org/Vol-3523/paper9.pdf`,
            abstract: `Fairness has emerged as a critical concern in the field of machine learning impacting its application in various domains. While there have been successful attempts to tackle fairness, many existing analyses rely on sophisticated mathematical methods that may lack intuitive understanding. Drawing inspiration from successful applications in other areas of machine learning, in this study, we propose a GEOmetric Framework for Fairness – GEOFFair – that represents distributions, ML models, fairness constraints, and hypothesis spaces as vectors and sets. The geometric framework aims to provide a more intuitive and rigorous understanding of fairness in Artificial Intelligence (AI). It enables visualizing mitigation techniques as movements in the vector space and aids in constructing proofs-by-witness by quickly identifying examples or counter-examples. Furthermore, the geometric framework offers a platform for studying various fairness properties, including geometrical distances between fairness vectors, relative fairness comparisons, and the exploration of symmetries, invariances, and trade-offs between fairness metrics.`
        }, {
            relevant: false,
            title: `Expert-MusiComb: Injective Domain Knowledge in a Neuro-Symbolic Approach for Music Generation`,
            authors: `L. Tribuiani, <u>L. Giuliani</u>, A. De Filippo, A. Borghesi`,
            publisher: `CREAI Workshop @ ECAI, 2024 (A Conference)`,
            link: `https://ceur-ws.org/Vol-3810/paper4.pdf`,
            abstract: `The significant expansion of data-driven technologies in the past decade has highlighted the crucial role of structured data, given the more relevant and meaningful informative content that they can provide to artificial intelligence (AI) applications. Nonetheless, there are domains based on inherently unstructured data, such as the audio domain. In those cases, the possibility of relying on an automated system capable of extracting structured features from raw data could serve as a pivotal element in enhancing and strengthening the capabilities of an AI system. In this work, we propose an automated feature extractor which leverages machine and deep learning methodologies to retrieve two higher-level musical attributes from short MIDI samples, namely the harmonic content of the sample – through its chords progression – and the role that such sample could have within a multi-track composition – i.e., melody, bass, or accompaniment. We perform our tests on a dataset containing ground truth information to assess quantitative results and later integrate our models within the state-of-the-art framework for combinatorial music generation MusiComb to check for harmonic and melodic consonance on the downstream generative task.`
        }, {
            relevant: false,
            title: `Towards Intelligent Music Production: A Sample-based Approach`,
            authors: `<u>L. Giuliani</u>, A. De Filippo, A. Borghesi`,
            publisher: `CREAI Workshop @ AIxIA, 2023 (C Conference)`,
            link: `https://ceur-ws.org/Vol-3519/paper5.pdf`,
            abstract: `Technological advances have always played a central role in shaping the production of popular music. Over the past few years, music generation systems started to attract considerable interest within the academic community, although the proposed prototypes rarely managed to emerge and be adopted by producers in their professional workflows. We argue that a major cause of that is the inherent complexity of integrating those systems into well-established music production pipelines, especially given that most of them are designed with the intent of replacing human creativity rather than assisting it. To this end, we discuss our proposal for a novel approach for Intelligent Music Production based on samples arrangement. Such a tools could offer several potential benefits in enhancing human creativity, as they provide the opportunity to keep human artists in the creative loop as well as to reduce computational costs and hardware requirements, making music production more accessible. As a first step towards this direction, we eventually present MusiComb, a prototype for sample-based music generation. Alongside, we report how this relatively simple system has demonstrated`
        }, {
            relevant: false,
            title: `Towards Symbiotic Creativity: A Methodological Approach to Compare Human and AI Robotic Dance Creations`,
            authors: `<u>L. Giuliani</u>, A. De Filippo, A. Borghesi, P. Mello, M. Milano`,
            publisher: `CREAI Workshop @ AIxIA, 2022 (C Conference)`,
            link: `https://ceur-ws.org/Vol-3278/short3.pdf`,
            abstract: `In recent years, the interplay between creativity and Artificial Intelligence (AI) has been gaining more and more attention from the research community. Within this vast area, humanoid robots have been successfully used in artistic research areas, and many works have studied and implemented systems for robotic dance. However, only few works take into account the human evaluation of these artistic outputs. For this aim, we start from a recent work focused on defining criteria for the evaluation of robotic dance performances, and we analyze a further crucial aspect such as the need for a multi-modal perspective: the musical element needs to blend seamlessly and organically with the choreography, in accordance to the judgments expressed by human evaluators. Based on the analysis of results, musical elements emerged as having a large impact on the artistic evaluation. For this reason, the final purpose of this work is twofold: we would like both to explore new creative paths where humans ideas can be broadened by the use of AI software, but also to help both human choreographers and AI algorithms to create dance performances and music with a major impact on the audience.`
        }],
        // PROJECTS DATA
        projects: [{
            relevant: true,
            title: `MaxCorr`,
            link: `https://github.com/giuluck/maxcorr`,
            tagline: select(
                `A Python Package for the Estimation of Maximal Correlation Indicators`,
                `Un Pacchetto Python per il Calcolo di Indicatori di Correlazione Massima`
            )
        }, {
            relevant: true,
            title: `Moving Targets`,
            link: `https://github.com/moving-targets/moving-targets`,
            tagline: select(
                `A Python Package for Constrained Machine Learning based on Bi-level Decomposition`,
                `Un Pacchetto Python per il Machine Learning Vincolato basato su una Decomposizione Bi-livello`
            )
        }, {
            relevant: true,
            title: `Non-Linear Correlations`,
            link: `https://github.com/giuluck/non-linear-correlations`,
            tagline: select(
                `Experiments to Reproduce the Results showed in my PhD Dissertation`,
                `Esperimenti per Riprodurre tutti i Risultati mostrati nella mia Tesi di Dottorato`
            )
        }, {
            relevant: true,
            title: `Another Genetic Circuit Transcriber`,
            link: `https://github.com/AGCT-DSL/AGCT`,
            tagline: select(
                `A Kotlin-based Domain-Specific Language for the Definition of Gene Regulatory Networks`,
                `Un Linguaggio Dominio-Specifico basato su Kotlin per la Definizione di Reti Geniche`
            )
        }, {
            relevant: false,
            title: `Causalgen`,
            link: `https://github.com/giuluck/causalgen`,
            tagline: select(
                `A Python Package for Data Generation based on Causal Dependencies`,
                `Un Pacchetto Python per la Generazione di Dati basata su Dipendenze Causali`
            )
        }, {
            relevant: false,
            title: `Powerplantsim`,
            link: `https://github.com/giuluck/powerplantsim`,
            tagline: select(
                `A Graph-based Simulator for Power Plants`,
                `Un Simulatore di Power Plants basato su Grafi`
            )
        }, {
            relevant: false,
            title: `Interactive Benchmark Library`,
            link: `https://github.com/giuluck/benchmark-library`,
            tagline: select(
                `A Benchmark Library developed for the TUPLES European Project`,
                `Una Libreria di Benchmark sviluppata per il Progetto Europeo TUPLES`
            )
        }, {
            relevant: false,
            title: `Epidemic Model Learning`,
            link: `https://github.com/mazzio97/EpidemicModelLearning`,
            tagline: select(
                `An Analysis of Covid Data based on Machine Learning and Mathematical Programming`,
                `Un'Analisi di Dati Covid basata su Machine Learning e Programmazione Matematica`
            )
        }, {
            relevant: false,
            title: `Deep Comedy`,
            link: `https://github.com/mazzio97/DeepComedy`,
            tagline: select(
                `A Transformer-based Neural Architecture aimed at reproducing the Style of the Divine Comedy`,
                `Un'Architettura Neural basata su Transformer per riprodurre lo Stile della Divina Commedia`
            )
        }, {
            relevant: false,
            title: `Gangster SQuAD`,
            link: `https://github.com/giuluck/Gangster-SQuAD`,
            tagline: select(
                `A BERT-based Natural Language Processing System for Question Answering Tasks`,
                `Un Sistema di Elaborazione del Linguaggio Naturale basato su BERT per il Problema di Question Answering`
            )
        }, {
            relevant: false,
            title: `IoTrace`,
            link: `https://github.com/mazzio97/IoTrace`,
            tagline: select(
                `A Prototype of Contact Tracing App built with IOTA`,
                `Un Prototipo di App per il Contact Tracing sviluppata con IOTA`
            )
        }, {
            relevant: false,
            title: `Paku Paku`,
            link: `https://github.com/giuluck/PakuPaku`,
            tagline: select(
                `A One-Vs-One Pacman developed in C++ using OpenGL Primitives`,
                `Un Pacman Uno-Contro-Uno sviluppato in C++ usando Primitive OpenGL`
            )
        }, {
            relevant: false,
            title: `Snailysis`,
            link: `https://github.com/mazzio97/Snailysis`,
            tagline: select(
                `A Level-based Platform Game with a Weird Focus on Calculus`,
                `Un Platform Game a Livelli con uno Strano Focus sull'Analisi Matematica`
            )
        }, {
            relevant: false,
            title: `AlmaFood`,
            link: `https://github.com/mazzio97/AlmaFood`,
            tagline: select(
                `A Prototype of a JustEat Clone for the Cesena Campus of the University of Bologna`,
                `Un Prototipo di Clone di JustEat per il Campus di Cesena dell'Università di Bologna`
            )
        }]
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

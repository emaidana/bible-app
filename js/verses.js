/**
 * Bible Verses Data - Curated collection with bilingual analysis
 * English: King James Version (KJV)
 * Spanish: Reina-Valera 1960 (RVR 1960)
 */

const BibleVerses = [
    {
        id: "john-3-16",
        book: { en: "John", es: "Juan" },
        chapter: 3,
        verse: 16,
        text: {
            en: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
            es: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna."
        },
        analysis: {
            historical: {
                en: "Jesus spoke these words to Nicodemus around 27-30 AD during the early Roman occupation of Judea. Nicodemus was a Pharisee and member of the Sanhedrin who came to Jesus at night, likely fearing social repercussions. This conversation took place in Jerusalem, possibly during or near the Passover festival.",
                es: "Jesús pronunció estas palabras a Nicodemo alrededor del año 27-30 d.C. durante la ocupación romana temprana de Judea. Nicodemo era un fariseo y miembro del Sanedrín que vino a Jesús de noche, probablemente temiendo repercusiones sociales. Esta conversación tuvo lugar en Jerusalén, posiblemente durante o cerca de la fiesta de Pascua.",
                sources: [
                    { type: "academic", citation: "Brown, R.E. (1966). The Gospel According to John I-XII. Anchor Bible Commentary.", citationEs: "Brown, R.E. (1966). El Evangelio según Juan I-XII. Comentario Bíblico Anchor." },
                    { type: "academic", citation: "Keener, C.S. (2003). The Gospel of John: A Commentary. Hendrickson Publishers.", citationEs: "Keener, C.S. (2003). El Evangelio de Juan: Un Comentario. Hendrickson Publishers." },
                    { type: "archaeological", citation: "Archaeological evidence from Jerusalem's Upper City excavations (Avigad, N., 1980).", citationEs: "Evidencia arqueológica de las excavaciones de la Ciudad Alta de Jerusalén (Avigad, N., 1980)." }
                ],
                confidenceLevel: "consensus",
                disclaimer: {
                    en: "Dating reflects scholarly consensus; Nicodemus's night visit is recorded only in John's Gospel.",
                    es: "La datación refleja consenso académico; la visita nocturna de Nicodemo solo se registra en el Evangelio de Juan."
                }
            },
            economic: {
                en: "First-century Palestine had stark economic divisions. The concept of 'giving' one's son would resonate with an agrarian society where children represented economic security and future labor. The universal offer ('whosoever') was radical—salvation wasn't reserved for the wealthy who could afford temple sacrifices.",
                es: "La Palestina del siglo I tenía divisiones económicas marcadas. El concepto de 'dar' al hijo resonaría en una sociedad agraria donde los hijos representaban seguridad económica y mano de obra futura. La oferta universal ('todo aquel') era radical: la salvación no estaba reservada para los ricos que podían costear sacrificios en el templo.",
                sources: [
                    { type: "academic", citation: "Hanson, K.C. & Oakman, D. (1998). Palestine in the Time of Jesus. Fortress Press.", citationEs: "Hanson, K.C. & Oakman, D. (1998). Palestina en Tiempos de Jesús. Fortress Press." },
                    { type: "academic", citation: "Fiensy, D.A. (2007). Jesus the Galilean: Soundings in a First Century Life. Gorgias Press.", citationEs: "Fiensy, D.A. (2007). Jesús el Galileo: Sondeos en una Vida del Siglo I. Gorgias Press." }
                ],
                confidenceLevel: "consensus",
                disclaimer: {
                    en: "Economic conditions are well-documented through archaeological and textual evidence.",
                    es: "Las condiciones económicas están bien documentadas a través de evidencia arqueológica y textual."
                }
            },
            social: {
                en: "Jewish society was highly stratified. Nicodemus, as a Pharisee, belonged to the educated elite. Yet Jesus offered the same promise to everyone—revolutionary for a culture where religious knowledge was gatekept by scholars. The phrase 'the world' broke ethnic and social barriers.",
                es: "La sociedad judía estaba muy estratificada. Nicodemo, como fariseo, pertenecía a la élite educada. Sin embargo, Jesús ofreció la misma promesa a todos—revolucionario para una cultura donde el conocimiento religioso era controlado por los eruditos. La frase 'el mundo' rompía barreras étnicas y sociales.",
                sources: [
                    { type: "academic", citation: "Sanders, E.P. (1992). Judaism: Practice and Belief, 63 BCE–66 CE. SCM Press.", citationEs: "Sanders, E.P. (1992). Judaísmo: Práctica y Creencia, 63 a.C.–66 d.C. SCM Press." },
                    { type: "academic", citation: "Saldarini, A.J. (1988). Pharisees, Scribes and Sadducees in Palestinian Society. Eerdmans.", citationEs: "Saldarini, A.J. (1988). Fariseos, Escribas y Saduceos en la Sociedad Palestina. Eerdmans." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            political: {
                en: "Rome ruled Judea through client kings and prefects. The Jewish people longed for a political messiah to overthrow Rome. Jesus redefined messiahship—offering spiritual rather than political liberation. This disappointed many but also made his message less threatening to Rome initially.",
                es: "Roma gobernaba Judea a través de reyes vasallos y prefectos. El pueblo judío anhelaba un mesías político que derrocara a Roma. Jesús redefinió el concepto de mesías—ofreciendo liberación espiritual en lugar de política. Esto decepcionó a muchos pero también hizo su mensaje menos amenazante para Roma inicialmente.",
                sources: [
                    { type: "academic", citation: "Horsley, R.A. (2003). Jesus and Empire: The Kingdom of God and the New World Disorder. Fortress Press.", citationEs: "Horsley, R.A. (2003). Jesús y el Imperio: El Reino de Dios y el Nuevo Desorden Mundial. Fortress Press." },
                    { type: "academic", citation: "Goodman, M. (2007). Rome and Jerusalem: The Clash of Ancient Civilizations. Penguin.", citationEs: "Goodman, M. (2007). Roma y Jerusalén: El Choque de Civilizaciones Antiguas. Penguin." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            author: {
                en: "John, the 'beloved disciple,' wrote his gospel likely between 85-95 AD. He was a fisherman from Galilee who became part of Jesus's inner circle. Writing decades after the events, John crafted a theological narrative emphasizing Jesus's divine nature. This verse encapsulates his core message.",
                es: "Juan, el 'discípulo amado,' escribió su evangelio probablemente entre el 85-95 d.C. Era un pescador de Galilea que se convirtió en parte del círculo íntimo de Jesús. Escribiendo décadas después de los eventos, Juan elaboró una narrativa teológica enfatizando la naturaleza divina de Jesús. Este versículo encapsula su mensaje central.",
                sources: [
                    { type: "academic", citation: "Brown, R.E. (1979). The Community of the Beloved Disciple. Paulist Press.", citationEs: "Brown, R.E. (1979). La Comunidad del Discípulo Amado. Paulist Press." },
                    { type: "academic", citation: "Bauckham, R. (2006). Jesus and the Eyewitnesses. Eerdmans.", citationEs: "Bauckham, R. (2006). Jesús y los Testigos Oculares. Eerdmans." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Authorship and exact dating remain debated among scholars; traditional attribution is to John the Apostle.",
                    es: "La autoría y datación exacta siguen siendo debatidas entre los académicos; la atribución tradicional es a Juan el Apóstol."
                }
            },
            neuroscience: {
                en: "The brain processes concepts of love through the limbic system, particularly the amygdala and prefrontal cortex. Hearing about unconditional love activates reward centers similar to receiving love directly. The concept of 'eternal life' engages our temporal processing, as humans uniquely contemplate mortality and meaning beyond death.",
                es: "El cerebro procesa conceptos de amor a través del sistema límbico, particularmente la amígdala y la corteza prefrontal. Escuchar sobre amor incondicional activa centros de recompensa similares a recibir amor directamente. El concepto de 'vida eterna' involucra nuestro procesamiento temporal, ya que los humanos contemplan de manera única la mortalidad y el significado más allá de la muerte.",
                sources: [
                    { type: "peer-reviewed", citation: "Eisenberger, N.I. (2012). The neural bases of social pain. Psychosomatic Medicine, 74(2), 126-135.", citationEs: "Eisenberger, N.I. (2012). Las bases neurales del dolor social. Psychosomatic Medicine, 74(2), 126-135." },
                    { type: "peer-reviewed", citation: "Bartels, A. & Zeki, S. (2004). The neural correlates of maternal and romantic love. NeuroImage, 21(3), 1155-1166.", citationEs: "Bartels, A. & Zeki, S. (2004). Los correlatos neurales del amor maternal y romántico. NeuroImage, 21(3), 1155-1166." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Neuroscience connections are interpretive applications of research findings to biblical text.",
                    es: "Las conexiones con neurociencia son aplicaciones interpretativas de hallazgos de investigación al texto bíblico."
                }
            },
            behavioral: {
                en: "This verse leverages the psychological principle of reciprocity—God gave first, inviting response. The universal framing ('whosoever') uses inclusive language that reduces psychological barriers to belonging. The promise of avoiding loss ('not perish') taps into loss aversion, a powerful motivator in human decision-making.",
                es: "Este versículo aprovecha el principio psicológico de reciprocidad—Dios dio primero, invitando una respuesta. El marco universal ('todo aquel') usa lenguaje inclusivo que reduce las barreras psicológicas de pertenencia. La promesa de evitar la pérdida ('no se pierda') apela a la aversión a la pérdida, un poderoso motivador en la toma de decisiones humanas.",
                sources: [
                    { type: "peer-reviewed", citation: "Cialdini, R.B. (2009). Influence: Science and Practice (5th ed.). Pearson.", citationEs: "Cialdini, R.B. (2009). Influencia: Ciencia y Práctica (5ta ed.). Pearson." },
                    { type: "peer-reviewed", citation: "Kahneman, D. & Tversky, A. (1979). Prospect Theory: An Analysis of Decision under Risk. Econometrica, 47(2), 263-291.", citationEs: "Kahneman, D. & Tversky, A. (1979). Teoría Prospectiva: Un Análisis de Decisión bajo Riesgo. Econometrica, 47(2), 263-291." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Behavioral science principles are applied interpretively to ancient texts.",
                    es: "Los principios de ciencia conductual se aplican interpretativamente a textos antiguos."
                }
            },
            nudge: {
                en: "Today, extend unexpected kindness to someone who hasn't earned it. Just as this verse describes love given freely, identify one person and offer them something valuable—your time, attention, or help—with no expectation of return.",
                es: "Hoy, extendé bondad inesperada a alguien que no se la haya ganado. Así como este versículo describe amor dado libremente, identificá a una persona y ofrecele algo valioso—tu tiempo, atención o ayuda—sin esperar nada a cambio.",
                sources: [],
                confidenceLevel: "interpretation",
                disclaimer: {
                    en: "This practical application is devotional in nature and reflects one possible response to the text.",
                    es: "Esta aplicación práctica es de naturaleza devocional y refleja una posible respuesta al texto."
                }
            }
        }
    },
    {
        id: "philippians-4-13",
        book: { en: "Philippians", es: "Filipenses" },
        chapter: 4,
        verse: 13,
        text: {
            en: "I can do all things through Christ which strengtheneth me.",
            es: "Todo lo puedo en Cristo que me fortalece."
        },
        analysis: {
            historical: {
                en: "Paul wrote this letter around 61-62 AD while imprisoned in Rome, awaiting trial before Caesar. Despite chains and uncertainty about his fate, Paul wrote one of the most joy-filled letters in the New Testament. The Philippian church had sent him financial support through Epaphroditus.",
                es: "Pablo escribió esta carta alrededor del 61-62 d.C. mientras estaba encarcelado en Roma, esperando juicio ante César. A pesar de las cadenas y la incertidumbre sobre su destino, Pablo escribió una de las cartas más llenas de gozo del Nuevo Testamento. La iglesia de Filipos le había enviado apoyo financiero a través de Epafrodito.",
                sources: [
                    { type: "academic", citation: "Fee, G.D. (1995). Paul's Letter to the Philippians. NICNT. Eerdmans.", citationEs: "Fee, G.D. (1995). La Carta de Pablo a los Filipenses. NICNT. Eerdmans." },
                    { type: "academic", citation: "Hawthorne, G.F. (2004). Philippians. Word Biblical Commentary. Nelson.", citationEs: "Hawthorne, G.F. (2004). Filipenses. Comentario Bíblico Word. Nelson." }
                ],
                confidenceLevel: "consensus",
                disclaimer: {
                    en: "Dating and Roman imprisonment context are well-established in Pauline scholarship.",
                    es: "La datación y el contexto del encarcelamiento romano están bien establecidos en los estudios paulinos."
                }
            },
            economic: {
                en: "The context reveals Paul discussing contentment in poverty and abundance. He had learned to live with little or plenty. This wasn't prosperity theology—it was resilience theology. The Philippians themselves were a working-class congregation who sacrificed to support Paul's ministry.",
                es: "El contexto revela a Pablo hablando de contentamiento en pobreza y abundancia. Había aprendido a vivir con poco o con mucho. Esto no era teología de la prosperidad—era teología de la resiliencia. Los filipenses mismos eran una congregación de clase trabajadora que sacrificaba para apoyar el ministerio de Pablo.",
                sources: [
                    { type: "academic", citation: "Oakes, P. (2001). Philippians: From People to Letter. Cambridge University Press.", citationEs: "Oakes, P. (2001). Filipenses: Del Pueblo a la Carta. Cambridge University Press." },
                    { type: "archaeological", citation: "Pilhofer, P. (1995). Philippi. Band I: Die erste christliche Gemeinde Europas. Mohr Siebeck.", citationEs: "Pilhofer, P. (1995). Filipos. Tomo I: La Primera Comunidad Cristiana de Europa. Mohr Siebeck." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            social: {
                en: "Philippi was a Roman colony with strong civic pride. Many residents were retired soldiers or their descendants. The church there included Lydia (a wealthy merchant), a slave girl, and a jailer—a remarkably diverse social mix unified by faith rather than class.",
                es: "Filipos era una colonia romana con fuerte orgullo cívico. Muchos residentes eran soldados retirados o sus descendientes. La iglesia allí incluía a Lidia (una comerciante adinerada), una esclava, y un carcelero—una mezcla social notablemente diversa unificada por la fe en lugar de la clase.",
                sources: [
                    { type: "academic", citation: "Hellerman, J.H. (2005). Reconstructing Honor in Roman Philippi. Cambridge University Press.", citationEs: "Hellerman, J.H. (2005). Reconstruyendo el Honor en Filipos Romana. Cambridge University Press." },
                    { type: "archaeological", citation: "Koukouli-Chrysantaki, C. (1998). Colonia Iulia Augusta Philippensis. BCH Supplement 38.", citationEs: "Koukouli-Chrysantaki, C. (1998). Colonia Iulia Augusta Philippensis. BCH Suplemento 38." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            political: {
                en: "Paul's imprisonment was political—he had appealed to Caesar as a Roman citizen. Writing from the heart of the Empire, he declared allegiance to a different king. The phrase 'all things' would include enduring unjust political persecution, a timely message for persecuted believers.",
                es: "El encarcelamiento de Pablo era político—había apelado a César como ciudadano romano. Escribiendo desde el corazón del Imperio, declaró lealtad a un rey diferente. La frase 'todo' incluiría soportar persecución política injusta, un mensaje oportuno para creyentes perseguidos.",
                sources: [
                    { type: "academic", citation: "Cassidy, R.J. (2001). Paul in Chains: Roman Imprisonment and the Letters of St. Paul. Herder & Herder.", citationEs: "Cassidy, R.J. (2001). Pablo Encadenado: Encarcelamiento Romano y las Cartas de San Pablo. Herder & Herder." },
                    { type: "academic", citation: "Rapske, B. (1994). Paul in Roman Custody. Eerdmans.", citationEs: "Rapske, B. (1994). Pablo en Custodia Romana. Eerdmans." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            author: {
                en: "Paul of Tarsus was a former Pharisee who persecuted Christians before his dramatic conversion. He was highly educated, multilingual, and a Roman citizen—privileges he used to spread the gospel across the Mediterranean. His letters reveal a passionate, complex personality.",
                es: "Pablo de Tarso era un ex fariseo que perseguía a los cristianos antes de su dramática conversión. Era muy educado, multilingüe y ciudadano romano—privilegios que usó para difundir el evangelio por el Mediterráneo. Sus cartas revelan una personalidad apasionada y compleja.",
                sources: [
                    { type: "academic", citation: "Murphy-O'Connor, J. (1996). Paul: A Critical Life. Oxford University Press.", citationEs: "Murphy-O'Connor, J. (1996). Pablo: Una Vida Crítica. Oxford University Press." },
                    { type: "academic", citation: "Dunn, J.D.G. (1998). The Theology of Paul the Apostle. Eerdmans.", citationEs: "Dunn, J.D.G. (1998). La Teología de Pablo el Apóstol. Eerdmans." }
                ],
                confidenceLevel: "consensus",
                disclaimer: {
                    en: "Pauline authorship of Philippians is virtually undisputed among scholars.",
                    es: "La autoría paulina de Filipenses es prácticamente indiscutida entre los académicos."
                }
            },
            neuroscience: {
                en: "Belief in external support activates the brain's social baseline theory—we function better when we perceive support systems. This verse creates a cognitive anchor that can reduce cortisol (stress hormone) levels by shifting perception from 'I alone' to 'I with support.'",
                es: "La creencia en apoyo externo activa la teoría de línea base social del cerebro—funcionamos mejor cuando percibimos sistemas de apoyo. Este versículo crea un ancla cognitiva que puede reducir los niveles de cortisol (hormona del estrés) al cambiar la percepción de 'yo solo' a 'yo con apoyo.'",
                sources: [
                    { type: "peer-reviewed", citation: "Coan, J.A. & Sbarra, D.A. (2015). Social Baseline Theory: The social regulation of risk and effort. Current Opinion in Psychology, 1, 87-91.", citationEs: "Coan, J.A. & Sbarra, D.A. (2015). Teoría de Línea Base Social: La regulación social del riesgo y esfuerzo. Current Opinion in Psychology, 1, 87-91." },
                    { type: "peer-reviewed", citation: "McEwen, B.S. (2007). Physiology and neurobiology of stress and adaptation. Physiological Reviews, 87(3), 873-904.", citationEs: "McEwen, B.S. (2007). Fisiología y neurobiología del estrés y adaptación. Physiological Reviews, 87(3), 873-904." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Application of social baseline theory to religious texts represents interpretive extrapolation.",
                    es: "La aplicación de la teoría de línea base social a textos religiosos representa extrapolación interpretativa."
                }
            },
            behavioral: {
                en: "This verse exemplifies self-efficacy enhancement—Bandura's concept that belief in one's capability affects actual performance. The external attribution ('through Christ') paradoxically increases internal motivation by reducing performance anxiety and fear of failure.",
                es: "Este versículo ejemplifica el aumento de la autoeficacia—el concepto de Bandura de que la creencia en la propia capacidad afecta el rendimiento real. La atribución externa ('en Cristo') paradójicamente aumenta la motivación interna al reducir la ansiedad de rendimiento y el miedo al fracaso.",
                sources: [
                    { type: "peer-reviewed", citation: "Bandura, A. (1997). Self-efficacy: The exercise of control. W.H. Freeman.", citationEs: "Bandura, A. (1997). Autoeficacia: El ejercicio del control. W.H. Freeman." },
                    { type: "peer-reviewed", citation: "Pargament, K.I. (1997). The Psychology of Religion and Coping. Guilford Press.", citationEs: "Pargament, K.I. (1997). La Psicología de la Religión y el Afrontamiento. Guilford Press." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Self-efficacy research supports the general principle; direct application to this verse is interpretive.",
                    es: "La investigación sobre autoeficacia apoya el principio general; la aplicación directa a este versículo es interpretativa."
                }
            },
            nudge: {
                en: "Identify one challenge you've been avoiding because it feels too difficult. Write it down, then reframe it: 'I can face [this challenge] with the strength I need.' Take one small step toward it today.",
                es: "Identificá un desafío que has estado evitando porque se siente muy difícil. Escribilo, luego reenmarcalo: 'Puedo enfrentar [este desafío] con la fuerza que necesito.' Hoy, dá un pequeño paso hacia él.",
                sources: [],
                confidenceLevel: "interpretation",
                disclaimer: {
                    en: "This practical application is devotional in nature and reflects one possible response to the text.",
                    es: "Esta aplicación práctica es de naturaleza devocional y refleja una posible respuesta al texto."
                }
            }
        }
    },
    {
        id: "jeremiah-29-11",
        book: { en: "Jeremiah", es: "Jeremías" },
        chapter: 29,
        verse: 11,
        text: {
            en: "For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end.",
            es: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis."
        },
        analysis: {
            historical: {
                en: "Jeremiah wrote this around 597 BC to Jewish exiles deported to Babylon after Nebuchadnezzar's conquest of Jerusalem. They had lost everything—homeland, temple, freedom. False prophets promised quick return, but Jeremiah said the exile would last 70 years. This promise came within that difficult reality.",
                es: "Jeremías escribió esto alrededor del 597 a.C. a los exiliados judíos deportados a Babilonia después de la conquista de Jerusalén por Nabucodonosor. Habían perdido todo—patria, templo, libertad. Falsos profetas prometían un regreso rápido, pero Jeremías dijo que el exilio duraría 70 años. Esta promesa vino dentro de esa difícil realidad.",
                sources: [
                    { type: "academic", citation: "Holladay, W.L. (1989). Jeremiah 2: A Commentary on Jeremiah 26-52. Hermeneia. Fortress Press.", citationEs: "Holladay, W.L. (1989). Jeremías 2: Un Comentario sobre Jeremías 26-52. Hermeneia. Fortress Press." },
                    { type: "archaeological", citation: "Oded, B. (1979). Mass Deportations and Deportees in the Neo-Assyrian Empire. Reichert.", citationEs: "Oded, B. (1979). Deportaciones Masivas y Deportados en el Imperio Neoasirio. Reichert." },
                    { type: "primary", citation: "Babylonian Chronicles (British Museum tablets) documenting Jerusalem's fall.", citationEs: "Crónicas Babilónicas (tablillas del Museo Británico) documentando la caída de Jerusalén." }
                ],
                confidenceLevel: "consensus",
                disclaimer: {
                    en: "The Babylonian conquest and exile are confirmed by multiple ancient sources and archaeology.",
                    es: "La conquista babilónica y el exilio están confirmados por múltiples fuentes antiguas y arqueología."
                }
            },
            economic: {
                en: "The exiles were resettled as a labor force in Babylon's economy. Jeremiah advised them to build houses, plant gardens, and seek the city's welfare—economic integration, not withdrawal. God's 'good plans' included thriving economically in a foreign land while awaiting restoration.",
                es: "Los exiliados fueron reasentados como mano de obra en la economía de Babilonia. Jeremías les aconsejó construir casas, plantar huertos y buscar el bienestar de la ciudad—integración económica, no aislamiento. Los 'buenos planes' de Dios incluían prosperar económicamente en tierra extranjera mientras esperaban la restauración.",
                sources: [
                    { type: "academic", citation: "Albertz, R. (2003). Israel in Exile: The History and Literature of the Sixth Century B.C.E. Society of Biblical Literature.", citationEs: "Albertz, R. (2003). Israel en el Exilio: La Historia y Literatura del Siglo VI a.C. Society of Biblical Literature." },
                    { type: "archaeological", citation: "Al-Yahudu tablets documenting Jewish settlement in Babylon (Pearce & Wunsch, 2014).", citationEs: "Tablillas de Al-Yahudu documentando el asentamiento judío en Babilonia (Pearce & Wunsch, 2014)." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            social: {
                en: "Exile shattered Jewish social structures. Families were separated, communities dispersed. Jeremiah's letter addressed a traumatized community struggling with identity: How do we remain God's people in a pagan land? The answer was to form new communities and maintain faith practices.",
                es: "El exilio destruyó las estructuras sociales judías. Las familias fueron separadas, las comunidades dispersadas. La carta de Jeremías se dirigía a una comunidad traumatizada luchando con su identidad: ¿Cómo seguimos siendo el pueblo de Dios en tierra pagana? La respuesta era formar nuevas comunidades y mantener las prácticas de fe.",
                sources: [
                    { type: "academic", citation: "Smith-Christopher, D.L. (2002). A Biblical Theology of Exile. Fortress Press.", citationEs: "Smith-Christopher, D.L. (2002). Una Teología Bíblica del Exilio. Fortress Press." },
                    { type: "academic", citation: "Ahn, J.J. (2011). Exile as Forced Migrations. De Gruyter.", citationEs: "Ahn, J.J. (2011). El Exilio como Migración Forzada. De Gruyter." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            political: {
                en: "Babylon was the superpower of the ancient Near East. Some Jews wanted rebellion; others collaborated too eagerly. Jeremiah's politically unpopular message was to accept Babylonian rule as God's discipline, neither fighting nor fully assimilating, but waiting faithfully.",
                es: "Babilonia era la superpotencia del antiguo Cercano Oriente. Algunos judíos querían rebelión; otros colaboraban con demasiado entusiasmo. El mensaje políticamente impopular de Jeremías era aceptar el gobierno babilónico como disciplina de Dios, sin pelear ni asimilarse completamente, sino esperando con fe.",
                sources: [
                    { type: "academic", citation: "Lipschits, O. (2005). The Fall and Rise of Jerusalem. Eisenbrauns.", citationEs: "Lipschits, O. (2005). La Caída y Resurgimiento de Jerusalén. Eisenbrauns." },
                    { type: "academic", citation: "Vanderhooft, D.S. (1999). The Neo-Babylonian Empire and Babylon in the Latter Prophets. Scholars Press.", citationEs: "Vanderhooft, D.S. (1999). El Imperio Neobabilónico y Babilonia en los Profetas Posteriores. Scholars Press." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            author: {
                en: "Jeremiah, the 'weeping prophet,' ministered during Judah's final decades before destruction. Called as a youth, he faced constant rejection, imprisonment, and death threats for his unpopular messages. He wrote from Jerusalem to the exiles, sharing their pain while offering God's perspective.",
                es: "Jeremías, el 'profeta llorón,' ministró durante las últimas décadas de Judá antes de la destrucción. Llamado siendo joven, enfrentó rechazo constante, encarcelamiento y amenazas de muerte por sus mensajes impopulares. Escribió desde Jerusalén a los exiliados, compartiendo su dolor mientras ofrecía la perspectiva de Dios.",
                sources: [
                    { type: "academic", citation: "Lundbom, J.R. (1999). Jeremiah 1-20. Anchor Bible. Doubleday.", citationEs: "Lundbom, J.R. (1999). Jeremías 1-20. Anchor Bible. Doubleday." },
                    { type: "academic", citation: "Brueggemann, W. (1998). A Commentary on Jeremiah: Exile and Homecoming. Eerdmans.", citationEs: "Brueggemann, W. (1998). Un Comentario sobre Jeremías: Exilio y Regreso. Eerdmans." }
                ],
                confidenceLevel: "consensus",
                disclaimer: {
                    en: "Jeremiah's ministry is well-attested; some passages may include later editorial additions.",
                    es: "El ministerio de Jeremías está bien atestiguado; algunos pasajes pueden incluir adiciones editoriales posteriores."
                }
            },
            neuroscience: {
                en: "Hope activates the brain's reward system, releasing dopamine even before desired outcomes occur. Neuroimaging shows that believing in a positive future reduces amygdala activity (threat response) and engages prefrontal planning circuits. Hope literally changes brain chemistry.",
                es: "La esperanza activa el sistema de recompensa del cerebro, liberando dopamina incluso antes de que ocurran los resultados deseados. Las neuroimágenes muestran que creer en un futuro positivo reduce la actividad de la amígdala (respuesta a amenazas) y activa los circuitos de planificación prefrontal. La esperanza literalmente cambia la química cerebral.",
                sources: [
                    { type: "peer-reviewed", citation: "Cheavens, J.S. et al. (2006). Hope and depression: Light through the shadows. In J.E. Maddux (Ed.), Self-Efficacy, Adaptation, and Adjustment. Springer.", citationEs: "Cheavens, J.S. et al. (2006). Esperanza y depresión: Luz entre las sombras. En J.E. Maddux (Ed.), Autoeficacia, Adaptación y Ajuste. Springer." },
                    { type: "peer-reviewed", citation: "Snyder, C.R. (2002). Hope theory: Rainbows in the mind. Psychological Inquiry, 13(4), 249-275.", citationEs: "Snyder, C.R. (2002). Teoría de la esperanza: Arcoíris en la mente. Psychological Inquiry, 13(4), 249-275." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "The neuroscience of hope is an active research area; connections to ancient texts are interpretive.",
                    es: "La neurociencia de la esperanza es un área de investigación activa; las conexiones con textos antiguos son interpretativas."
                }
            },
            behavioral: {
                en: "This verse uses temporal framing—shifting focus from present suffering to future hope. Psychologically, future orientation correlates with resilience, delayed gratification, and better decision-making. The 70-year timeframe made hope concrete rather than vague.",
                es: "Este versículo usa encuadre temporal—cambiando el enfoque del sufrimiento presente a la esperanza futura. Psicológicamente, la orientación hacia el futuro se correlaciona con la resiliencia, la gratificación diferida y mejor toma de decisiones. El plazo de 70 años hizo la esperanza concreta en lugar de vaga.",
                sources: [
                    { type: "peer-reviewed", citation: "Zimbardo, P.G. & Boyd, J.N. (1999). Putting time in perspective. Journal of Personality and Social Psychology, 77(6), 1271-1288.", citationEs: "Zimbardo, P.G. & Boyd, J.N. (1999). Poniendo el tiempo en perspectiva. Journal of Personality and Social Psychology, 77(6), 1271-1288." },
                    { type: "peer-reviewed", citation: "Mischel, W. et al. (1989). Delay of gratification in children. Science, 244(4907), 933-938.", citationEs: "Mischel, W. et al. (1989). Retraso de la gratificación en niños. Science, 244(4907), 933-938." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Temporal framing research supports general principles; application to this verse is interpretive.",
                    es: "La investigación sobre encuadre temporal apoya principios generales; la aplicación a este versículo es interpretativa."
                }
            },
            nudge: {
                en: "Write a letter to yourself dated one year from now, describing the good things that have happened. Be specific. Then identify one action you can take today that moves toward that future. Small steps in a hopeful direction compound.",
                es: "Escribí una carta a vos mismo fechada dentro de un año, describiendo las cosas buenas que han pasado. Sé específico. Luego identificá una acción que podés tomar hoy que te acerque a ese futuro. Los pequeños pasos en una dirección esperanzadora se multiplican.",
                sources: [],
                confidenceLevel: "interpretation",
                disclaimer: {
                    en: "This practical application is devotional in nature and reflects one possible response to the text.",
                    es: "Esta aplicación práctica es de naturaleza devocional y refleja una posible respuesta al texto."
                }
            }
        }
    },
    {
        id: "proverbs-3-5-6",
        book: { en: "Proverbs", es: "Proverbios" },
        chapter: 3,
        verse: "5-6",
        text: {
            en: "Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
            es: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas."
        },
        analysis: {
            historical: {
                en: "Proverbs was compiled during Israel's monarchy, with core content attributed to Solomon (970-930 BC). This was Israel's golden age—peace, prosperity, international trade. Yet Solomon warned against self-reliance precisely when circumstances made it most tempting.",
                es: "Proverbios fue compilado durante la monarquía de Israel, con contenido central atribuido a Salomón (970-930 a.C.). Esta fue la edad de oro de Israel—paz, prosperidad, comercio internacional. Sin embargo, Salomón advirtió contra la autosuficiencia precisamente cuando las circunstancias la hacían más tentadora.",
                sources: [
                    { type: "academic", citation: "Fox, M.V. (2000). Proverbs 1-9. Anchor Bible. Doubleday.", citationEs: "Fox, M.V. (2000). Proverbios 1-9. Anchor Bible. Doubleday." },
                    { type: "academic", citation: "Waltke, B.K. (2004). The Book of Proverbs: Chapters 1-15. NICOT. Eerdmans.", citationEs: "Waltke, B.K. (2004). El Libro de Proverbios: Capítulos 1-15. NICOT. Eerdmans." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "While traditionally attributed to Solomon, modern scholars debate the extent of his authorship and the compilation date.",
                    es: "Aunque tradicionalmente se atribuye a Salomón, los académicos modernos debaten el alcance de su autoría y la fecha de compilación."
                }
            },
            economic: {
                en: "Solomon's era saw unprecedented wealth through trade routes connecting Africa, Arabia, and Mediterranean markets. Wisdom literature like Proverbs often addressed merchants and administrators. 'Trust' here isn't passive—it's active reliance during business decisions, investments, and economic planning.",
                es: "La era de Salomón vio riqueza sin precedentes a través de rutas comerciales que conectaban África, Arabia y mercados mediterráneos. La literatura sapiencial como Proverbios frecuentemente se dirigía a comerciantes y administradores. 'Confiar' aquí no es pasivo—es dependencia activa durante decisiones de negocios, inversiones y planificación económica.",
                sources: [
                    { type: "academic", citation: "Dell, K.J. (2006). The Book of Proverbs in Social and Theological Context. Cambridge University Press.", citationEs: "Dell, K.J. (2006). El Libro de Proverbios en Contexto Social y Teológico. Cambridge University Press." },
                    { type: "archaeological", citation: "Mazar, A. (2006). Excavations at Tel Beth-Shean 1989-1996. Israel Exploration Society.", citationEs: "Mazar, A. (2006). Excavaciones en Tel Beth-Shean 1989-1996. Israel Exploration Society." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            social: {
                en: "Hebrew wisdom literature served as education for young men entering public life. The father-son framing ('my son') reflects family-based education. These proverbs shaped social expectations for leadership, warning against pride and promoting humble consultation.",
                es: "La literatura sapiencial hebrea servía como educación para jóvenes entrando a la vida pública. El marco padre-hijo ('hijo mío') refleja la educación basada en la familia. Estos proverbios moldeaban las expectativas sociales para el liderazgo, advirtiendo contra el orgullo y promoviendo la consulta humilde.",
                sources: [
                    { type: "academic", citation: "Crenshaw, J.L. (1998). Old Testament Wisdom: An Introduction. Westminster John Knox.", citationEs: "Crenshaw, J.L. (1998). Sabiduría del Antiguo Testamento: Una Introducción. Westminster John Knox." },
                    { type: "academic", citation: "Weeks, S. (2010). An Introduction to the Study of Wisdom Literature. T&T Clark.", citationEs: "Weeks, S. (2010). Una Introducción al Estudio de la Literatura Sapiencial. T&T Clark." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            political: {
                en: "Solomon received his wisdom as a gift from God when he could have asked for power or wealth. This verse reflects that origin—political success comes not from cunning but from divine guidance. Later kings who ignored this principle often fell.",
                es: "Salomón recibió su sabiduría como regalo de Dios cuando podría haber pedido poder o riqueza. Este versículo refleja ese origen—el éxito político viene no de la astucia sino de la guía divina. Reyes posteriores que ignoraron este principio frecuentemente cayeron.",
                sources: [
                    { type: "academic", citation: "Knoppers, G.N. (1993). Two Nations Under God: The Deuteronomistic History of Solomon. Scholars Press.", citationEs: "Knoppers, G.N. (1993). Dos Naciones Bajo Dios: La Historia Deuteronomista de Salomón. Scholars Press." },
                    { type: "academic", citation: "Halpern, B. (2001). David's Secret Demons: Messiah, Murderer, Traitor, King. Eerdmans.", citationEs: "Halpern, B. (2001). Los Demonios Secretos de David: Mesías, Asesino, Traidor, Rey. Eerdmans." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "The historicity of Solomon's golden age is debated; biblical accounts may contain idealized elements.",
                    es: "La historicidad de la edad de oro de Salomón es debatida; los relatos bíblicos pueden contener elementos idealizados."
                }
            },
            author: {
                en: "Solomon, David's son, was legendary for wisdom. He authored most of Proverbs, plus Ecclesiastes and Song of Solomon. Ironically, his own life showed the danger of not following this advice—his many foreign wives led him to idolatry in his later years.",
                es: "Salomón, hijo de David, era legendario por su sabiduría. Escribió la mayoría de Proverbios, además de Eclesiastés y Cantar de los Cantares. Irónicamente, su propia vida mostró el peligro de no seguir este consejo—sus muchas esposas extranjeras lo llevaron a la idolatría en sus últimos años.",
                sources: [
                    { type: "academic", citation: "Longman III, T. (2006). Proverbs. Baker Commentary on the Old Testament. Baker Academic.", citationEs: "Longman III, T. (2006). Proverbios. Baker Commentary on the Old Testament. Baker Academic." },
                    { type: "academic", citation: "Clifford, R.J. (1999). Proverbs. Old Testament Library. Westminster John Knox.", citationEs: "Clifford, R.J. (1999). Proverbios. Old Testament Library. Westminster John Knox." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Traditional Solomonic authorship is maintained by some; others see later compilation with varied sources.",
                    es: "Algunos mantienen la autoría salomónica tradicional; otros ven una compilación posterior con fuentes variadas."
                }
            },
            neuroscience: {
                en: "The brain's default mode network constantly generates predictions and plans. 'Leaning on understanding' engages analytical circuits, while 'trusting' involves different neural pathways associated with social cognition and secure attachment. Both systems can work together.",
                es: "La red de modo predeterminado del cerebro genera constantemente predicciones y planes. 'Apoyarse en la prudencia' activa circuitos analíticos, mientras que 'confiar' involucra diferentes vías neuronales asociadas con cognición social y apego seguro. Ambos sistemas pueden trabajar juntos.",
                sources: [
                    { type: "peer-reviewed", citation: "Buckner, R.L. et al. (2008). The brain's default network. Annals of the New York Academy of Sciences, 1124(1), 1-38.", citationEs: "Buckner, R.L. et al. (2008). La red por defecto del cerebro. Annals of the New York Academy of Sciences, 1124(1), 1-38." },
                    { type: "peer-reviewed", citation: "Amodio, D.M. & Frith, C.D. (2006). Meeting of minds: the medial frontal cortex and social cognition. Nature Reviews Neuroscience, 7(4), 268-277.", citationEs: "Amodio, D.M. & Frith, C.D. (2006). Encuentro de mentes: la corteza frontal medial y la cognición social. Nature Reviews Neuroscience, 7(4), 268-277." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Neural correlates of trust are well-documented; application to this verse is interpretive.",
                    es: "Los correlatos neurales de la confianza están bien documentados; la aplicación a este versículo es interpretativa."
                }
            },
            behavioral: {
                en: "This verse addresses cognitive bias—our tendency to overestimate our understanding. Behavioral science shows that acknowledging limitations ('lean not') actually improves decision-making by opening us to outside input. Humility is a strategic advantage.",
                es: "Este versículo aborda el sesgo cognitivo—nuestra tendencia a sobreestimar nuestro entendimiento. La ciencia conductual muestra que reconocer limitaciones ('no te apoyes') en realidad mejora la toma de decisiones al abrirnos a aportes externos. La humildad es una ventaja estratégica.",
                sources: [
                    { type: "peer-reviewed", citation: "Kruger, J. & Dunning, D. (1999). Unskilled and unaware of it. Journal of Personality and Social Psychology, 77(6), 1121-1134.", citationEs: "Kruger, J. & Dunning, D. (1999). Sin habilidades y sin saberlo. Journal of Personality and Social Psychology, 77(6), 1121-1134." },
                    { type: "peer-reviewed", citation: "Tetlock, P.E. (2005). Expert Political Judgment: How Good Is It? Princeton University Press.", citationEs: "Tetlock, P.E. (2005). Juicio Político Experto: ¿Qué Tan Bueno Es? Princeton University Press." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Cognitive bias research supports the general wisdom; application to ancient texts is interpretive.",
                    es: "La investigación sobre sesgo cognitivo apoya la sabiduría general; la aplicación a textos antiguos es interpretativa."
                }
            },
            nudge: {
                en: "Before making today's biggest decision, pause and honestly list what you don't know about the situation. Then seek one outside perspective—a friend, mentor, or simply more information. Let uncertainty become curiosity rather than anxiety.",
                es: "Antes de tomar la decisión más importante de hoy, pausá y honestamente listá lo que no sabés sobre la situación. Luego buscá una perspectiva externa—un amigo, mentor, o simplemente más información. Dejá que la incertidumbre se convierta en curiosidad en lugar de ansiedad.",
                sources: [],
                confidenceLevel: "interpretation",
                disclaimer: {
                    en: "This practical application is devotional in nature and reflects one possible response to the text.",
                    es: "Esta aplicación práctica es de naturaleza devocional y refleja una posible respuesta al texto."
                }
            }
        }
    },
    {
        id: "romans-8-28",
        book: { en: "Romans", es: "Romanos" },
        chapter: 8,
        verse: 28,
        text: {
            en: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
            es: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados."
        },
        analysis: {
            historical: {
                en: "Paul wrote Romans around 57 AD, before visiting Rome. The Roman church faced unique challenges—diverse ethnic backgrounds, political tensions, and questions about Jewish law's role. Paul wrote his most systematic theology to a church he hadn't founded, preparing them for his visit.",
                es: "Pablo escribió Romanos alrededor del 57 d.C., antes de visitar Roma. La iglesia romana enfrentaba desafíos únicos—diversos orígenes étnicos, tensiones políticas y preguntas sobre el rol de la ley judía. Pablo escribió su teología más sistemática a una iglesia que no había fundado, preparándolos para su visita.",
                sources: [
                    { type: "academic", citation: "Jewett, R. (2007). Romans: A Commentary. Hermeneia. Fortress Press.", citationEs: "Jewett, R. (2007). Romanos: Un Comentario. Hermeneia. Fortress Press." },
                    { type: "academic", citation: "Dunn, J.D.G. (1988). Romans 1-8. Word Biblical Commentary. Word Books.", citationEs: "Dunn, J.D.G. (1988). Romanos 1-8. Comentario Bíblico Word. Word Books." },
                    { type: "academic", citation: "Fitzmyer, J.A. (1993). Romans. Anchor Bible. Doubleday.", citationEs: "Fitzmyer, J.A. (1993). Romanos. Anchor Bible. Doubleday." }
                ],
                confidenceLevel: "consensus",
                disclaimer: {
                    en: "Dating and context of Romans are well-established in Pauline scholarship.",
                    es: "La datación y el contexto de Romanos están bien establecidos en los estudios paulinos."
                }
            },
            economic: {
                en: "Rome's economy depended on slavery, trade, and tribute from conquered peoples. Early Christians came from all economic levels—slaves, freedmen, merchants, and some wealthy households. 'All things working together' offered hope regardless of economic status or circumstances.",
                es: "La economía de Roma dependía de la esclavitud, el comercio y el tributo de pueblos conquistados. Los primeros cristianos venían de todos los niveles económicos—esclavos, libertos, comerciantes y algunas familias adineradas. 'Todas las cosas ayudan a bien' ofrecía esperanza sin importar el estatus económico o las circunstancias.",
                sources: [
                    { type: "academic", citation: "Lampe, P. (2003). From Paul to Valentinus: Christians at Rome in the First Two Centuries. Fortress Press.", citationEs: "Lampe, P. (2003). De Pablo a Valentín: Cristianos en Roma en los Primeros Dos Siglos. Fortress Press." },
                    { type: "academic", citation: "Scheidel, W. (2012). The Cambridge Companion to the Roman Economy. Cambridge University Press.", citationEs: "Scheidel, W. (2012). Cambridge Companion a la Economía Romana. Cambridge University Press." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            social: {
                en: "Roman society was rigidly hierarchical. The church subverted this—slaves and masters worshipped together. This verse's promise applied equally to all 'who love God,' cutting across social distinctions. Early Christianity's radical equality attracted many from marginalized groups.",
                es: "La sociedad romana era rígidamente jerárquica. La iglesia subvertía esto—esclavos y amos adoraban juntos. La promesa de este versículo aplicaba igualmente a todos 'los que aman a Dios,' atravesando distinciones sociales. La igualdad radical del cristianismo primitivo atrajo a muchos de grupos marginados.",
                sources: [
                    { type: "academic", citation: "Meeks, W.A. (2003). The First Urban Christians: The Social World of the Apostle Paul. Yale University Press.", citationEs: "Meeks, W.A. (2003). Los Primeros Cristianos Urbanos: El Mundo Social del Apóstol Pablo. Yale University Press." },
                    { type: "academic", citation: "Stark, R. (1996). The Rise of Christianity. Princeton University Press.", citationEs: "Stark, R. (1996). El Ascenso del Cristianismo. Princeton University Press." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            political: {
                en: "Writing to the capital of the Empire, Paul carefully avoided political confrontation while asserting a higher allegiance. 'His purpose' transcended Caesar's purposes. Within decades, Christians would face intense persecution—this verse would sustain them through suffering.",
                es: "Escribiendo a la capital del Imperio, Pablo cuidadosamente evitó la confrontación política mientras afirmaba una lealtad superior. 'Su propósito' trascendía los propósitos del César. En décadas, los cristianos enfrentarían intensa persecución—este versículo los sostendría a través del sufrimiento.",
                sources: [
                    { type: "academic", citation: "Wright, N.T. (2002). Romans. New Interpreter's Bible. Abingdon Press.", citationEs: "Wright, N.T. (2002). Romanos. New Interpreter's Bible. Abingdon Press." },
                    { type: "academic", citation: "Elliott, N. (2008). The Arrogance of Nations: Reading Romans in the Shadow of Empire. Fortress Press.", citationEs: "Elliott, N. (2008). La Arrogancia de las Naciones: Leyendo Romanos bajo la Sombra del Imperio. Fortress Press." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            author: {
                en: "Paul wrote Romans from Corinth during his third missionary journey. At this point, he was a mature apostle with years of church-planting experience. Romans represents his most careful, comprehensive presentation of the gospel—the letter he'd want remembered.",
                es: "Pablo escribió Romanos desde Corinto durante su tercer viaje misionero. En este punto, era un apóstol maduro con años de experiencia plantando iglesias. Romanos representa su presentación más cuidadosa y completa del evangelio—la carta que querría que se recordara.",
                sources: [
                    { type: "academic", citation: "Das, A.A. (2007). Solving the Romans Debate. Fortress Press.", citationEs: "Das, A.A. (2007). Resolviendo el Debate de Romanos. Fortress Press." },
                    { type: "academic", citation: "Moo, D.J. (1996). The Epistle to the Romans. NICNT. Eerdmans.", citationEs: "Moo, D.J. (1996). La Epístola a los Romanos. NICNT. Eerdmans." }
                ],
                confidenceLevel: "consensus",
                disclaimer: {
                    en: "Pauline authorship of Romans is virtually undisputed among scholars.",
                    es: "La autoría paulina de Romanos es prácticamente indiscutida entre los académicos."
                }
            },
            neuroscience: {
                en: "Finding meaning in adversity activates the brain's sense-making circuits in the prefrontal cortex. Research shows that people who perceive purpose in suffering show lower inflammation markers and better immune function. The brain responds positively to coherent narratives, even difficult ones.",
                es: "Encontrar significado en la adversidad activa los circuitos de creación de sentido del cerebro en la corteza prefrontal. La investigación muestra que las personas que perciben propósito en el sufrimiento muestran menores marcadores de inflamación y mejor función inmune. El cerebro responde positivamente a narrativas coherentes, incluso las difíciles.",
                sources: [
                    { type: "peer-reviewed", citation: "Fredrickson, B.L. et al. (2013). A functional genomic perspective on human well-being. PNAS, 110(33), 13684-13689.", citationEs: "Fredrickson, B.L. et al. (2013). Una perspectiva genómica funcional sobre el bienestar humano. PNAS, 110(33), 13684-13689." },
                    { type: "peer-reviewed", citation: "Park, C.L. (2010). Making sense of the meaning literature. Psychological Bulletin, 136(2), 257-301.", citationEs: "Park, C.L. (2010). Entendiendo la literatura sobre el significado. Psychological Bulletin, 136(2), 257-301." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Research on meaning-making supports general benefits; application to religious texts is interpretive.",
                    es: "La investigación sobre creación de significado apoya beneficios generales; la aplicación a textos religiosos es interpretativa."
                }
            },
            behavioral: {
                en: "This verse reframes negative events through 'benefit finding'—a studied resilience factor. It doesn't deny pain but provides interpretive flexibility. Psychologically, believing events have meaning increases perceived control and reduces helplessness, even when circumstances can't be changed.",
                es: "Este versículo reenmarca eventos negativos a través del 'hallazgo de beneficios'—un factor de resiliencia estudiado. No niega el dolor pero proporciona flexibilidad interpretativa. Psicológicamente, creer que los eventos tienen significado aumenta el control percibido y reduce la impotencia, incluso cuando las circunstancias no pueden cambiarse.",
                sources: [
                    { type: "peer-reviewed", citation: "Tennen, H. & Affleck, G. (2002). Benefit-finding and benefit-reminding. In C.R. Snyder & S.J. Lopez (Eds.), Handbook of Positive Psychology. Oxford University Press.", citationEs: "Tennen, H. & Affleck, G. (2002). Hallazgo y recordatorio de beneficios. En C.R. Snyder & S.J. Lopez (Eds.), Manual de Psicología Positiva. Oxford University Press." },
                    { type: "peer-reviewed", citation: "Seligman, M.E.P. (2011). Flourish: A Visionary New Understanding of Happiness and Well-being. Free Press.", citationEs: "Seligman, M.E.P. (2011). Florecer: Una Nueva Comprensión Visionaria de la Felicidad y el Bienestar. Free Press." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Benefit-finding research is robust; connections to this specific verse are interpretive applications.",
                    es: "La investigación sobre hallazgo de beneficios es robusta; las conexiones con este versículo específico son aplicaciones interpretativas."
                }
            },
            nudge: {
                en: "Think of a recent difficulty. Without minimizing the pain, write down one way you've grown, learned, or connected with others through it. Finding meaning isn't denying hardship—it's refusing to let hardship have the final word.",
                es: "Pensá en una dificultad reciente. Sin minimizar el dolor, escribí una forma en que has crecido, aprendido o conectado con otros a través de ella. Encontrar significado no es negar la adversidad—es negarse a dejar que la adversidad tenga la última palabra.",
                sources: [],
                confidenceLevel: "interpretation",
                disclaimer: {
                    en: "This practical application is devotional in nature and reflects one possible response to the text.",
                    es: "Esta aplicación práctica es de naturaleza devocional y refleja una posible respuesta al texto."
                }
            }
        }
    },
    {
        id: "psalm-23-1",
        book: { en: "Psalms", es: "Salmos" },
        chapter: 23,
        verse: "1-4",
        text: {
            en: "The Lord is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake. Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.",
            es: "Jehová es mi pastor; nada me faltará. En lugares de delicados pastos me hará descansar; junto a aguas de reposo me pastoreará. Confortará mi alma; me guiará por sendas de justicia por amor de su nombre. Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo; tu vara y tu cayado me infundirán aliento."
        },
        analysis: {
            historical: {
                en: "David likely wrote this psalm during his reign (1010-970 BC), reflecting on his youth as a shepherd in Bethlehem. The imagery wasn't abstract—David had literally protected sheep from lions and bears. This personal history gave the metaphor depth and authenticity.",
                es: "David probablemente escribió este salmo durante su reinado (1010-970 a.C.), reflexionando sobre su juventud como pastor en Belén. Las imágenes no eran abstractas—David había protegido literalmente ovejas de leones y osos. Esta historia personal le dio profundidad y autenticidad a la metáfora.",
                sources: [
                    { type: "academic", citation: "Alter, R. (2007). The Book of Psalms: A Translation with Commentary. W.W. Norton.", citationEs: "Alter, R. (2007). El Libro de los Salmos: Una Traducción con Comentario. W.W. Norton." },
                    { type: "academic", citation: "Craigie, P.C. (2004). Psalms 1-50. Word Biblical Commentary. Nelson.", citationEs: "Craigie, P.C. (2004). Salmos 1-50. Comentario Bíblico Word. Nelson." },
                    { type: "archaeological", citation: "Mazar, E. (2009). The Palace of King David: Excavations at the Summit of the City of David. Shoham Academic Research.", citationEs: "Mazar, E. (2009). El Palacio del Rey David: Excavaciones en la Cumbre de la Ciudad de David. Shoham Academic Research." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Davidic authorship is traditional; some scholars date the psalm later. The shepherd imagery reflects authentic ancient practices.",
                    es: "La autoría davídica es tradicional; algunos académicos datan el salmo más tarde. Las imágenes del pastor reflejan prácticas antiguas auténticas."
                }
            },
            economic: {
                en: "Shepherding was common but low-status work in ancient Israel. Sheep represented wealth—milk, wool, meat, and sacrifice animals. A good shepherd meant economic security. David's metaphor elevated both the profession and the profound dependency it represented.",
                es: "El pastoreo era trabajo común pero de bajo estatus en el antiguo Israel. Las ovejas representaban riqueza—leche, lana, carne y animales de sacrificio. Un buen pastor significaba seguridad económica. La metáfora de David elevó tanto la profesión como la profunda dependencia que representaba.",
                sources: [
                    { type: "academic", citation: "Borowski, O. (1998). Every Living Thing: Daily Use of Animals in Ancient Israel. AltaMira Press.", citationEs: "Borowski, O. (1998). Todo Ser Viviente: Uso Diario de Animales en el Antiguo Israel. AltaMira Press." },
                    { type: "academic", citation: "King, P.J. & Stager, L.E. (2001). Life in Biblical Israel. Westminster John Knox.", citationEs: "King, P.J. & Stager, L.E. (2001). La Vida en el Israel Bíblico. Westminster John Knox." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            social: {
                en: "Shepherds lived on society's margins, often alone for long periods. Yet David chose this lowly image for God. The psalm was sung in temple worship, connecting urban worshippers to pastoral roots and reminding the powerful that they too were vulnerable sheep.",
                es: "Los pastores vivían en los márgenes de la sociedad, frecuentemente solos por largos períodos. Sin embargo, David eligió esta imagen humilde para Dios. El salmo se cantaba en la adoración del templo, conectando a los adoradores urbanos con raíces pastorales y recordando a los poderosos que ellos también eran ovejas vulnerables.",
                sources: [
                    { type: "academic", citation: "Matthews, V.H. (2003). Manners and Customs in the Bible (3rd ed.). Hendrickson.", citationEs: "Matthews, V.H. (2003). Usos y Costumbres en la Biblia (3ra ed.). Hendrickson." },
                    { type: "academic", citation: "Landy, F. (1993). 'The construction of the subject and the symbolic order: A reading of the last three verses of Psalm 23.' Semeia, 61, 45-69.", citationEs: "Landy, F. (1993). 'La construcción del sujeto y el orden simbólico: Una lectura de los últimos tres versículos del Salmo 23.' Semeia, 61, 45-69." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            political: {
                en: "Kings in the ancient Near East were often called 'shepherds' of their people. David subverted this—the true shepherd-king is God himself. Even as Israel's king, David positioned himself as a sheep, not the ultimate shepherd. True leadership acknowledges higher authority.",
                es: "Los reyes en el antiguo Cercano Oriente frecuentemente eran llamados 'pastores' de su pueblo. David subvirtió esto—el verdadero rey-pastor es Dios mismo. Incluso como rey de Israel, David se posicionó como una oveja, no el pastor supremo. El verdadero liderazgo reconoce una autoridad superior.",
                sources: [
                    { type: "academic", citation: "Walton, J.H. (2006). Ancient Near Eastern Thought and the Old Testament. Baker Academic.", citationEs: "Walton, J.H. (2006). Pensamiento del Antiguo Cercano Oriente y el Antiguo Testamento. Baker Academic." },
                    { type: "primary", citation: "Code of Hammurabi prologue (c. 1754 BC) - 'shepherd of the people' royal imagery.", citationEs: "Prólogo del Código de Hammurabi (c. 1754 a.C.) - imaginería real del 'pastor del pueblo'." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            author: {
                en: "David was Israel's greatest king but also its most famous poet. He wrote many psalms during his turbulent life—as a fugitive from Saul, as a triumphant king, as a grieving father. This psalm likely came from a peaceful period, looking back with gratitude.",
                es: "David fue el rey más grande de Israel pero también su poeta más famoso. Escribió muchos salmos durante su vida turbulenta—como fugitivo de Saúl, como rey triunfante, como padre afligido. Este salmo probablemente vino de un período pacífico, mirando hacia atrás con gratitud.",
                sources: [
                    { type: "academic", citation: "Brueggemann, W. & Bellinger, W.H. (2014). Psalms. New Cambridge Bible Commentary. Cambridge University Press.", citationEs: "Brueggemann, W. & Bellinger, W.H. (2014). Salmos. New Cambridge Bible Commentary. Cambridge University Press." },
                    { type: "academic", citation: "Wilson, G.H. (2002). Psalms Volume 1. NIV Application Commentary. Zondervan.", citationEs: "Wilson, G.H. (2002). Salmos Volumen 1. NIV Application Commentary. Zondervan." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "The psalm's superscription attributes it to David; modern scholars hold varying views on authorship.",
                    es: "El título del salmo lo atribuye a David; los académicos modernos tienen varias opiniones sobre la autoría."
                }
            },
            neuroscience: {
                en: "The psalm's imagery activates the brain's relaxation response—green pastures and still waters trigger parasympathetic nervous system activation. Studies show that nature imagery alone can lower blood pressure and cortisol levels. The 'valley of death' then tests this calm.",
                es: "Las imágenes del salmo activan la respuesta de relajación del cerebro—pastos verdes y aguas tranquilas disparan la activación del sistema nervioso parasimpático. Los estudios muestran que las imágenes de la naturaleza solas pueden bajar la presión arterial y los niveles de cortisol. El 'valle de muerte' luego prueba esta calma.",
                sources: [
                    { type: "peer-reviewed", citation: "Berman, M.G. et al. (2008). The cognitive benefits of interacting with nature. Psychological Science, 19(12), 1207-1212.", citationEs: "Berman, M.G. et al. (2008). Los beneficios cognitivos de interactuar con la naturaleza. Psychological Science, 19(12), 1207-1212." },
                    { type: "peer-reviewed", citation: "Kaplan, S. (1995). The restorative benefits of nature: Toward an integrative framework. Journal of Environmental Psychology, 15(3), 169-182.", citationEs: "Kaplan, S. (1995). Los beneficios restauradores de la naturaleza: Hacia un marco integrativo. Journal of Environmental Psychology, 15(3), 169-182." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Nature imagery research is robust; its application to biblical poetry is interpretive.",
                    es: "La investigación sobre imágenes de la naturaleza es robusta; su aplicación a la poesía bíblica es interpretativa."
                }
            },
            behavioral: {
                en: "The psalm models secure attachment—the psychological foundation for resilience. 'I will fear no evil: for thou art with me' demonstrates that perceived presence of a protective figure reduces threat perception. This is why the psalm is read at funerals and crises.",
                es: "El salmo modela el apego seguro—la base psicológica para la resiliencia. 'No temeré mal alguno, porque tú estarás conmigo' demuestra que la presencia percibida de una figura protectora reduce la percepción de amenaza. Por eso el salmo se lee en funerales y crisis.",
                sources: [
                    { type: "peer-reviewed", citation: "Bowlby, J. (1988). A Secure Base: Parent-Child Attachment and Healthy Human Development. Basic Books.", citationEs: "Bowlby, J. (1988). Una Base Segura: Apego Padre-Hijo y Desarrollo Humano Saludable. Basic Books." },
                    { type: "peer-reviewed", citation: "Mikulincer, M. & Shaver, P.R. (2007). Attachment in Adulthood: Structure, Dynamics, and Change. Guilford Press.", citationEs: "Mikulincer, M. & Shaver, P.R. (2007). El Apego en la Adultez: Estructura, Dinámica y Cambio. Guilford Press." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Attachment theory is well-established; application to religious texts represents interpretive extrapolation.",
                    es: "La teoría del apego está bien establecida; la aplicación a textos religiosos representa extrapolación interpretativa."
                }
            },
            nudge: {
                en: "Find five minutes of stillness today. Close your eyes and visualize a peaceful place—real or imagined. Breathe slowly. When anxious thoughts arise, don't fight them; simply return to the image. Practice knowing you are not alone in life's valleys.",
                es: "Encontrá cinco minutos de quietud hoy. Cerrá los ojos y visualizá un lugar pacífico—real o imaginado. Respirá lentamente. Cuando surjan pensamientos ansiosos, no los combatas; simplemente volvé a la imagen. Practicá saber que no estás solo en los valles de la vida.",
                sources: [],
                confidenceLevel: "interpretation",
                disclaimer: {
                    en: "This practical application is devotional in nature and reflects one possible response to the text.",
                    es: "Esta aplicación práctica es de naturaleza devocional y refleja una posible respuesta al texto."
                }
            }
        }
    },
    {
        id: "matthew-6-33",
        book: { en: "Matthew", es: "Mateo" },
        chapter: 6,
        verse: 33,
        text: {
            en: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
            es: "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas."
        },
        analysis: {
            historical: {
                en: "Jesus spoke these words during the Sermon on the Mount (around 28-30 AD), his most comprehensive teaching. The setting was likely a hillside near Capernaum. This sermon established the ethical foundation of his movement, reinterpreting Jewish law for his followers.",
                es: "Jesús pronunció estas palabras durante el Sermón del Monte (alrededor del 28-30 d.C.), su enseñanza más completa. El escenario probablemente era una ladera cerca de Capernaúm. Este sermón estableció la base ética de su movimiento, reinterpretando la ley judía para sus seguidores.",
                sources: [
                    { type: "academic", citation: "Davies, W.D. & Allison, D.C. (1988). A Critical and Exegetical Commentary on Matthew. ICC. T&T Clark.", citationEs: "Davies, W.D. & Allison, D.C. (1988). Un Comentario Crítico y Exegético sobre Mateo. ICC. T&T Clark." },
                    { type: "academic", citation: "Luz, U. (2007). Matthew 1-7. Hermeneia. Fortress Press.", citationEs: "Luz, U. (2007). Mateo 1-7. Hermeneia. Fortress Press." },
                    { type: "archaeological", citation: "Reed, J.L. (2000). Archaeology and the Galilean Jesus. Trinity Press International.", citationEs: "Reed, J.L. (2000). Arqueología y Jesús el Galileo. Trinity Press International." }
                ],
                confidenceLevel: "consensus",
                disclaimer: {
                    en: "The Sermon on the Mount's setting and general date are well-established; some scholars debate whether it was one event or compiled teachings.",
                    es: "El escenario y fecha general del Sermón del Monte están bien establecidos; algunos académicos debaten si fue un evento o enseñanzas compiladas."
                }
            },
            economic: {
                en: "The context is explicitly economic—Jesus had just discussed worry about food, drink, and clothing. His audience were mostly peasants living subsistence lives. 'Seek first' wasn't advice for the comfortable; it was radical trust from people with genuine material needs.",
                es: "El contexto es explícitamente económico—Jesús acababa de hablar sobre la preocupación por comida, bebida y ropa. Su audiencia eran mayormente campesinos viviendo vidas de subsistencia. 'Buscad primeramente' no era consejo para los cómodos; era confianza radical de personas con necesidades materiales genuinas.",
                sources: [
                    { type: "academic", citation: "Oakman, D.E. (2008). Jesus and the Peasants. Cascade Books.", citationEs: "Oakman, D.E. (2008). Jesús y los Campesinos. Cascade Books." },
                    { type: "academic", citation: "Freyne, S. (2004). Jesus, a Jewish Galilean: A New Reading of the Jesus-Story. T&T Clark.", citationEs: "Freyne, S. (2004). Jesús, un Galileo Judío: Una Nueva Lectura de la Historia de Jesús. T&T Clark." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            social: {
                en: "First-century Galilee had significant social anxiety about provision. Debt, taxation, and economic instability were constant pressures. Jesus offered a counter-cultural priority system—community (kingdom) over competition. Early Christians practiced this through sharing resources.",
                es: "La Galilea del siglo I tenía significativa ansiedad social sobre la provisión. Deuda, impuestos e inestabilidad económica eran presiones constantes. Jesús ofreció un sistema de prioridades contracultural—comunidad (reino) sobre competencia. Los primeros cristianos practicaron esto compartiendo recursos.",
                sources: [
                    { type: "academic", citation: "Horsley, R.A. (1996). Archaeology, History, and Society in Galilee. Trinity Press International.", citationEs: "Horsley, R.A. (1996). Arqueología, Historia y Sociedad en Galilea. Trinity Press International." },
                    { type: "academic", citation: "Chancey, M.A. (2005). Greco-Roman Culture and the Galilee of Jesus. Cambridge University Press.", citationEs: "Chancey, M.A. (2005). Cultura Grecorromana y la Galilea de Jesús. Cambridge University Press." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            political: {
                en: "'Kingdom of God' was politically charged language in occupied Judea. It implied God's reign superseding Roman rule. Jesus redefined this kingdom as present and internal rather than future and military, but the political tension remained throughout his ministry.",
                es: "'Reino de Dios' era lenguaje políticamente cargado en la Judea ocupada. Implicaba que el reinado de Dios superaba el gobierno romano. Jesús redefinió este reino como presente e interno en lugar de futuro y militar, pero la tensión política permaneció durante todo su ministerio.",
                sources: [
                    { type: "academic", citation: "Crossan, J.D. (1991). The Historical Jesus: The Life of a Mediterranean Jewish Peasant. HarperSanFrancisco.", citationEs: "Crossan, J.D. (1991). El Jesús Histórico: La Vida de un Campesino Judío Mediterráneo. HarperSanFrancisco." },
                    { type: "academic", citation: "Perrin, N. (1963). The Kingdom of God in the Teaching of Jesus. Westminster Press.", citationEs: "Perrin, N. (1963). El Reino de Dios en la Enseñanza de Jesús. Westminster Press." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            author: {
                en: "Matthew, a former tax collector, wrote for a Jewish audience around 70-80 AD. He emphasized Jesus as the fulfillment of Jewish prophecy. This verse comes within Matthew's largest collection of Jesus's teaching, carefully organized to show Jesus as a new Moses giving new law.",
                es: "Mateo, un ex recaudador de impuestos, escribió para una audiencia judía alrededor del 70-80 d.C. Enfatizó a Jesús como el cumplimiento de la profecía judía. Este versículo viene dentro de la colección más grande de Mateo de las enseñanzas de Jesús, cuidadosamente organizada para mostrar a Jesús como un nuevo Moisés dando nueva ley.",
                sources: [
                    { type: "academic", citation: "Hagner, D.A. (1993). Matthew 1-13. Word Biblical Commentary. Word Books.", citationEs: "Hagner, D.A. (1993). Mateo 1-13. Comentario Bíblico Word. Word Books." },
                    { type: "academic", citation: "France, R.T. (2007). The Gospel of Matthew. NICNT. Eerdmans.", citationEs: "France, R.T. (2007). El Evangelio de Mateo. NICNT. Eerdmans." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Traditional attribution to Matthew the apostle; most scholars see it as composed by an unknown author using earlier sources.",
                    es: "Atribución tradicional a Mateo el apóstol; la mayoría de los académicos ven que fue compuesto por un autor desconocido usando fuentes anteriores."
                }
            },
            neuroscience: {
                en: "Prioritization engages the prefrontal cortex's executive function. When clear priorities exist, the brain reduces cognitive load on secondary concerns. Research shows that 'satisficing' (accepting 'good enough' on lesser priorities) reduces decision fatigue and anxiety.",
                es: "La priorización activa la función ejecutiva de la corteza prefrontal. Cuando existen prioridades claras, el cerebro reduce la carga cognitiva en preocupaciones secundarias. La investigación muestra que 'satisfacer' (aceptar 'suficientemente bueno' en prioridades menores) reduce la fatiga de decisión y la ansiedad.",
                sources: [
                    { type: "peer-reviewed", citation: "Miller, E.K. & Cohen, J.D. (2001). An integrative theory of prefrontal cortex function. Annual Review of Neuroscience, 24, 167-202.", citationEs: "Miller, E.K. & Cohen, J.D. (2001). Una teoría integrativa de la función de la corteza prefrontal. Annual Review of Neuroscience, 24, 167-202." },
                    { type: "peer-reviewed", citation: "Schwartz, B. (2004). The Paradox of Choice: Why More Is Less. Harper Perennial.", citationEs: "Schwartz, B. (2004). La Paradoja de la Elección: Por Qué Más Es Menos. Harper Perennial." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Executive function research is well-established; application to this verse is interpretive.",
                    es: "La investigación sobre función ejecutiva está bien establecida; la aplicación a este versículo es interpretativa."
                }
            },
            behavioral: {
                en: "This verse leverages priority hierarchy to reduce anxiety. Psychologically, having a clear 'first thing' simplifies countless daily decisions. It's a heuristic—a mental shortcut that improves well-being by reducing the burden of constant optimization.",
                es: "Este versículo aprovecha la jerarquía de prioridades para reducir la ansiedad. Psicológicamente, tener una 'primera cosa' clara simplifica innumerables decisiones diarias. Es una heurística—un atajo mental que mejora el bienestar al reducir la carga de la optimización constante.",
                sources: [
                    { type: "peer-reviewed", citation: "Simon, H.A. (1956). Rational choice and the structure of the environment. Psychological Review, 63(2), 129-138.", citationEs: "Simon, H.A. (1956). Elección racional y la estructura del ambiente. Psychological Review, 63(2), 129-138." },
                    { type: "peer-reviewed", citation: "Baumeister, R.F. et al. (2008). Free will in consumer behavior. Journal of Consumer Psychology, 18(4), 265-276.", citationEs: "Baumeister, R.F. et al. (2008). Libre albedrío en el comportamiento del consumidor. Journal of Consumer Psychology, 18(4), 265-276." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Heuristics research supports general principles; application to ancient texts is interpretive.",
                    es: "La investigación sobre heurísticas apoya principios generales; la aplicación a textos antiguos es interpretativa."
                }
            },
            nudge: {
                en: "Write down your top three priorities. Now honestly assess: Did yesterday's actions reflect those priorities? Identify one activity that consumed time but served no real priority. Consider what might replace it. Alignment brings peace.",
                es: "Escribí tus tres prioridades principales. Ahora evaluá honestamente: ¿Las acciones de ayer reflejaron esas prioridades? Identificá una actividad que consumió tiempo pero no sirvió a ninguna prioridad real. Considerá qué podría reemplazarla. La alineación trae paz.",
                sources: [],
                confidenceLevel: "interpretation",
                disclaimer: {
                    en: "This practical application is devotional in nature and reflects one possible response to the text.",
                    es: "Esta aplicación práctica es de naturaleza devocional y refleja una posible respuesta al texto."
                }
            }
        }
    },
    {
        id: "isaiah-41-10",
        book: { en: "Isaiah", es: "Isaías" },
        chapter: 41,
        verse: 10,
        text: {
            en: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.",
            es: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia."
        },
        analysis: {
            historical: {
                en: "This passage comes from 'Second Isaiah' (chapters 40-55), likely written during the Babylonian exile (586-539 BC) to comfort Jewish captives. Babylon had destroyed Jerusalem, but now Persia was rising. Isaiah spoke hope into despair, promising divine rescue.",
                es: "Este pasaje viene del 'Segundo Isaías' (capítulos 40-55), probablemente escrito durante el exilio babilónico (586-539 a.C.) para consolar a los cautivos judíos. Babilonia había destruido Jerusalén, pero ahora Persia estaba surgiendo. Isaías habló esperanza en la desesperación, prometiendo rescate divino.",
                sources: [
                    { type: "academic", citation: "Westermann, C. (1969). Isaiah 40-66. Old Testament Library. Westminster Press.", citationEs: "Westermann, C. (1969). Isaías 40-66. Old Testament Library. Westminster Press." },
                    { type: "academic", citation: "Blenkinsopp, J. (2002). Isaiah 40-55. Anchor Bible. Doubleday.", citationEs: "Blenkinsopp, J. (2002). Isaías 40-55. Anchor Bible. Doubleday." },
                    { type: "archaeological", citation: "Cyrus Cylinder (British Museum) - confirms Persian conquest of Babylon and religious tolerance policies.", citationEs: "Cilindro de Ciro (Museo Británico) - confirma la conquista persa de Babilonia y políticas de tolerancia religiosa." }
                ],
                confidenceLevel: "consensus",
                disclaimer: {
                    en: "The exilic context and 'Second Isaiah' authorship are widely accepted in critical scholarship, though traditionalists affirm single authorship.",
                    es: "El contexto exílico y la autoría del 'Segundo Isaías' son ampliamente aceptados en la erudición crítica, aunque los tradicionalistas afirman autoría única."
                }
            },
            economic: {
                en: "The exiles had lost everything—land, livelihood, temple. They worked as laborers in a foreign economy. God's promise to 'strengthen' and 'uphold' addressed their complete vulnerability. The 'right hand' imagery suggested divine power countering their powerlessness.",
                es: "Los exiliados habían perdido todo—tierra, sustento, templo. Trabajaban como obreros en una economía extranjera. La promesa de Dios de 'esforzar' y 'sustentar' abordaba su completa vulnerabilidad. Las imágenes de la 'diestra' sugerían poder divino contrarrestando su impotencia.",
                sources: [
                    { type: "academic", citation: "Pearce, L.E. & Wunsch, C. (2014). Documents of Judean Exiles and West Semites in Babylonia. CDL Press.", citationEs: "Pearce, L.E. & Wunsch, C. (2014). Documentos de Exiliados Judíos y Semitas Occidentales en Babilonia. CDL Press." },
                    { type: "academic", citation: "Joannès, F. & Lemaire, A. (1999). 'Trois tablettes cunéiformes à onomastique ouest-sémitique.' Transeuphratène, 17, 17-34.", citationEs: "Joannès, F. & Lemaire, A. (1999). 'Tres tablillas cuneiformes con onomástica semítica occidental.' Transeuphratène, 17, 17-34." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            social: {
                en: "Exile stripped away Jewish identity markers—no temple, no homeland, surrounded by foreign culture. Fear of cultural extinction was real. God's repeated 'I am' and 'I will' declarations anchored identity in divine relationship rather than cultural artifacts.",
                es: "El exilio despojó los marcadores de identidad judía—sin templo, sin patria, rodeados de cultura extranjera. El miedo a la extinción cultural era real. Las declaraciones repetidas de Dios 'yo soy' y 'yo' anclaban la identidad en la relación divina en lugar de artefactos culturales.",
                sources: [
                    { type: "academic", citation: "Kelle, B.E. & Moore, M.B. (2011). Israel's Prophets and Israel's Past. T&T Clark.", citationEs: "Kelle, B.E. & Moore, M.B. (2011). Los Profetas de Israel y el Pasado de Israel. T&T Clark." },
                    { type: "academic", citation: "Smith-Christopher, D.L. (1989). 'Reassessing the Historical and Sociological Impact of the Babylonian Exile.' In Exile: Old Testament, Jewish, and Christian Conceptions. Brill.", citationEs: "Smith-Christopher, D.L. (1989). 'Reevaluando el Impacto Histórico y Sociológico del Exilio Babilónico.' En Exilio: Concepciones del Antiguo Testamento, Judías y Cristianas. Brill." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            political: {
                en: "This was written as Cyrus of Persia rose to power—soon he would conquer Babylon and release the Jews. Isaiah saw Cyrus as God's instrument. The political message: current powers are temporary, but God's purposes endure. Deliverance was coming through unexpected means.",
                es: "Esto fue escrito mientras Ciro de Persia ascendía al poder—pronto conquistaría Babilonia y liberaría a los judíos. Isaías vio a Ciro como instrumento de Dios. El mensaje político: los poderes actuales son temporales, pero los propósitos de Dios perduran. La liberación vendría por medios inesperados.",
                sources: [
                    { type: "academic", citation: "Berquist, J.L. (1995). Judaism in Persia's Shadow. Fortress Press.", citationEs: "Berquist, J.L. (1995). Judaísmo bajo la Sombra de Persia. Fortress Press." },
                    { type: "primary", citation: "Herodotus, Histories, Book I - contemporary account of Persian expansion.", citationEs: "Herodoto, Historias, Libro I - relato contemporáneo de la expansión persa." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            author: {
                en: "The prophet behind chapters 40-55 wrote during the exile's latter years. Unlike Isaiah of Jerusalem (chapters 1-39), this voice focuses entirely on comfort and restoration. The writing style is among the most beautiful in Hebrew scripture—poetry for broken hearts.",
                es: "El profeta detrás de los capítulos 40-55 escribió durante los últimos años del exilio. A diferencia del Isaías de Jerusalén (capítulos 1-39), esta voz se enfoca enteramente en consuelo y restauración. El estilo de escritura está entre los más bellos de las escrituras hebreas—poesía para corazones rotos.",
                sources: [
                    { type: "academic", citation: "Childs, B.S. (2001). Isaiah. Old Testament Library. Westminster John Knox.", citationEs: "Childs, B.S. (2001). Isaías. Old Testament Library. Westminster John Knox." },
                    { type: "academic", citation: "Goldingay, J. & Payne, D. (2006). Isaiah 40-55. ICC. T&T Clark.", citationEs: "Goldingay, J. & Payne, D. (2006). Isaías 40-55. ICC. T&T Clark." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Most critical scholars distinguish 'Second Isaiah' from chapters 1-39; traditionalists maintain unified authorship.",
                    es: "La mayoría de los académicos críticos distinguen el 'Segundo Isaías' de los capítulos 1-39; los tradicionalistas mantienen autoría unificada."
                }
            },
            neuroscience: {
                en: "The repeated structure ('fear not... be not dismayed... I will... I will... I will') creates a neurological calming effect. Repetition and rhythm activate parasympathetic response. The escalating promises build psychological safety progressively, like a parent soothing a frightened child.",
                es: "La estructura repetida ('no temas... no desmayes... te esfuerzo... te ayudaré... te sustentaré') crea un efecto calmante neurológico. La repetición y el ritmo activan la respuesta parasimpática. Las promesas escalando construyen seguridad psicológica progresivamente, como un padre calmando a un niño asustado.",
                sources: [
                    { type: "peer-reviewed", citation: "Porges, S.W. (2011). The Polyvagal Theory: Neurophysiological Foundations of Emotions, Attachment, Communication, and Self-Regulation. W.W. Norton.", citationEs: "Porges, S.W. (2011). La Teoría Polivagal: Fundamentos Neurofisiológicos de las Emociones, Apego, Comunicación y Autorregulación. W.W. Norton." },
                    { type: "peer-reviewed", citation: "Thayer, J.F. et al. (2012). A meta-analysis of heart rate variability and neuroimaging studies. Neuroscience & Biobehavioral Reviews, 36(2), 747-756.", citationEs: "Thayer, J.F. et al. (2012). Un meta-análisis de variabilidad del ritmo cardíaco y estudios de neuroimagen. Neuroscience & Biobehavioral Reviews, 36(2), 747-756." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Parasympathetic response to repetition is documented; application to biblical poetry is interpretive.",
                    es: "La respuesta parasimpática a la repetición está documentada; la aplicación a la poesía bíblica es interpretativa."
                }
            },
            behavioral: {
                en: "The verse addresses fear directly with counter-messaging. Psychologically, fear responds to safety cues. The emphatic 'I am with thee' provides social presence; 'I am thy God' provides identity security; the three 'I wills' provide concrete commitment. Fear diminishes with perceived support.",
                es: "El versículo aborda el miedo directamente con contra-mensajes. Psicológicamente, el miedo responde a señales de seguridad. El enfático 'yo estoy contigo' proporciona presencia social; 'yo soy tu Dios' proporciona seguridad de identidad; los tres 'te' proporcionan compromiso concreto. El miedo disminuye con apoyo percibido.",
                sources: [
                    { type: "peer-reviewed", citation: "LeDoux, J.E. (2015). Anxious: Using the Brain to Understand and Treat Fear and Anxiety. Viking.", citationEs: "LeDoux, J.E. (2015). Ansioso: Usando el Cerebro para Entender y Tratar el Miedo y la Ansiedad. Viking." },
                    { type: "peer-reviewed", citation: "Coan, J.A. et al. (2006). Lending a hand: Social regulation of the neural response to threat. Psychological Science, 17(12), 1032-1039.", citationEs: "Coan, J.A. et al. (2006). Dando una mano: Regulación social de la respuesta neural a la amenaza. Psychological Science, 17(12), 1032-1039." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Fear reduction through social support is well-documented; application to this verse is interpretive.",
                    es: "La reducción del miedo a través del apoyo social está bien documentada; la aplicación a este versículo es interpretativa."
                }
            },
            nudge: {
                en: "What fear has been following you lately? Name it specifically. Then speak to yourself (out loud if possible): 'I am not alone in this. I have strength available. I will take one step forward today.' Then take that step, however small.",
                es: "¿Qué miedo te ha estado siguiendo últimamente? Nombralo específicamente. Luego hablate a vos mismo (en voz alta si es posible): 'No estoy solo en esto. Tengo fuerza disponible. Voy a dar un paso adelante hoy.' Luego dá ese paso, por pequeño que sea.",
                sources: [],
                confidenceLevel: "interpretation",
                disclaimer: {
                    en: "This practical application is devotional in nature and reflects one possible response to the text.",
                    es: "Esta aplicación práctica es de naturaleza devocional y refleja una posible respuesta al texto."
                }
            }
        }
    },
    {
        id: "galatians-5-22-23",
        book: { en: "Galatians", es: "Gálatas" },
        chapter: 5,
        verse: "22-23",
        text: {
            en: "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law.",
            es: "Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza; contra tales cosas no hay ley."
        },
        analysis: {
            historical: {
                en: "Paul wrote Galatians around 49-55 AD to churches in central Turkey. False teachers were insisting Gentile converts follow Jewish law, especially circumcision. Paul argued passionately that freedom in Christ, guided by the Spirit, produces better character than rule-following.",
                es: "Pablo escribió Gálatas alrededor del 49-55 d.C. a iglesias en el centro de Turquía. Falsos maestros insistían en que los conversos gentiles siguieran la ley judía, especialmente la circuncisión. Pablo argumentó apasionadamente que la libertad en Cristo, guiada por el Espíritu, produce mejor carácter que seguir reglas.",
                sources: [
                    { type: "academic", citation: "Martyn, J.L. (1997). Galatians. Anchor Bible. Doubleday.", citationEs: "Martyn, J.L. (1997). Gálatas. Anchor Bible. Doubleday." },
                    { type: "academic", citation: "Longenecker, R.N. (1990). Galatians. Word Biblical Commentary. Word Books.", citationEs: "Longenecker, R.N. (1990). Gálatas. Comentario Bíblico Word. Word Books." },
                    { type: "academic", citation: "Betz, H.D. (1979). Galatians. Hermeneia. Fortress Press.", citationEs: "Betz, H.D. (1979). Gálatas. Hermeneia. Fortress Press." }
                ],
                confidenceLevel: "consensus",
                disclaimer: {
                    en: "Pauline authorship of Galatians is virtually undisputed; the 'Judaizer' controversy is well-documented.",
                    es: "La autoría paulina de Gálatas es prácticamente indiscutida; la controversia con los 'judaizantes' está bien documentada."
                }
            },
            economic: {
                en: "Galatia was a trade crossroads with diverse economies. The fruit metaphor resonated with agricultural communities—fruit grows naturally from healthy trees, not from forcing. The economic implication: character development enables trustworthy commerce and community flourishing.",
                es: "Galacia era una encrucijada comercial con economías diversas. La metáfora del fruto resonaba con comunidades agrícolas—el fruto crece naturalmente de árboles saludables, no por fuerza. La implicación económica: el desarrollo del carácter permite comercio confiable y prosperidad comunitaria.",
                sources: [
                    { type: "academic", citation: "Mitchell, S. (1993). Anatolia: Land, Men, and Gods in Asia Minor. Vol. 2. Oxford University Press.", citationEs: "Mitchell, S. (1993). Anatolia: Tierra, Hombres y Dioses en Asia Menor. Vol. 2. Oxford University Press." },
                    { type: "archaeological", citation: "French, D.H. (2003). 'The Galatian Roman Roads.' In Galatians and Christian Theology. Baker Academic.", citationEs: "French, D.H. (2003). 'Los Caminos Romanos de Galacia.' En Gálatas y Teología Cristiana. Baker Academic." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            social: {
                en: "The nine fruits describe ideal community members. Each quality facilitates social harmony: love creates bonds, peace reduces conflict, patience enables forgiveness, gentleness de-escalates tension. This was a vision for counter-cultural community in a harsh world.",
                es: "Los nueve frutos describen miembros ideales de comunidad. Cada cualidad facilita la armonía social: el amor crea lazos, la paz reduce conflictos, la paciencia permite el perdón, la benignidad desescala tensiones. Esta era una visión para comunidad contracultural en un mundo duro.",
                sources: [
                    { type: "academic", citation: "Dunn, J.D.G. (1993). The Epistle to the Galatians. Black's New Testament Commentary. Hendrickson.", citationEs: "Dunn, J.D.G. (1993). La Epístola a los Gálatas. Black's New Testament Commentary. Hendrickson." },
                    { type: "academic", citation: "Hansen, G.W. (2010). Galatians. IVP New Testament Commentary. IVP Academic.", citationEs: "Hansen, G.W. (2010). Gálatas. IVP New Testament Commentary. IVP Academic." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            political: {
                en: "The final phrase—'against such there is no law'—was pointed. Paul argued that Spirit-led living exceeds legal requirements. In a world of competing legal systems (Jewish, Roman, local), Paul offered transformation that any law would approve. Character transcends jurisdiction.",
                es: "La frase final—'contra tales cosas no hay ley'—era punzante. Pablo argumentaba que la vida guiada por el Espíritu excede los requisitos legales. En un mundo de sistemas legales competidores (judío, romano, local), Pablo ofreció transformación que cualquier ley aprobaría. El carácter trasciende la jurisdicción.",
                sources: [
                    { type: "academic", citation: "Schreiner, T.R. (2010). Galatians. Zondervan Exegetical Commentary. Zondervan.", citationEs: "Schreiner, T.R. (2010). Gálatas. Zondervan Exegetical Commentary. Zondervan." },
                    { type: "academic", citation: "de Boer, M.C. (2011). Galatians. New Testament Library. Westminster John Knox.", citationEs: "de Boer, M.C. (2011). Gálatas. New Testament Library. Westminster John Knox." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            author: {
                en: "Galatians is Paul's most emotionally intense letter. He was angry that his converts were abandoning grace for law. The personal tone ('O foolish Galatians!') reveals how deeply he cared. The fruit of the Spirit passage offers the positive vision behind his critique.",
                es: "Gálatas es la carta más emocionalmente intensa de Pablo. Estaba enojado porque sus conversos estaban abandonando la gracia por la ley. El tono personal ('¡Oh gálatas insensatos!') revela cuánto le importaba. El pasaje del fruto del Espíritu ofrece la visión positiva detrás de su crítica.",
                sources: [
                    { type: "academic", citation: "Murphy-O'Connor, J. (1996). Paul: A Critical Life. Oxford University Press.", citationEs: "Murphy-O'Connor, J. (1996). Pablo: Una Vida Crítica. Oxford University Press." },
                    { type: "academic", citation: "Hays, R.B. (2000). The Letter to the Galatians. New Interpreter's Bible. Abingdon.", citationEs: "Hays, R.B. (2000). La Carta a los Gálatas. New Interpreter's Bible. Abingdon." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            neuroscience: {
                en: "Each 'fruit' corresponds to measurable neural states. Love activates oxytocin systems; joy involves dopamine; peace reflects parasympathetic dominance; patience requires prefrontal inhibition of impulses. These aren't just moral ideals—they're describable brain states that can be cultivated.",
                es: "Cada 'fruto' corresponde a estados neuronales medibles. El amor activa sistemas de oxitocina; el gozo involucra dopamina; la paz refleja dominancia parasimpática; la paciencia requiere inhibición prefrontal de impulsos. Estos no son solo ideales morales—son estados cerebrales describibles que pueden cultivarse.",
                sources: [
                    { type: "peer-reviewed", citation: "Kringelbach, M.L. & Berridge, K.C. (2009). Towards a functional neuroanatomy of pleasure and happiness. Trends in Cognitive Sciences, 13(11), 479-487.", citationEs: "Kringelbach, M.L. & Berridge, K.C. (2009). Hacia una neuroanatomía funcional del placer y la felicidad. Trends in Cognitive Sciences, 13(11), 479-487." },
                    { type: "peer-reviewed", citation: "Uvnäs-Moberg, K. et al. (2015). Self-soothing behaviors with particular reference to oxytocin release. Frontiers in Psychology, 5, 1529.", citationEs: "Uvnäs-Moberg, K. et al. (2015). Conductas de auto-calma con referencia particular a la liberación de oxitocina. Frontiers in Psychology, 5, 1529." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Neural correlates of virtues are being mapped; connections to this specific list are interpretive applications.",
                    es: "Los correlatos neurales de las virtudes están siendo mapeados; las conexiones con esta lista específica son aplicaciones interpretativas."
                }
            },
            behavioral: {
                en: "The 'fruit' metaphor suggests growth over time, not instant achievement. Behavioral science confirms: virtues are habits formed through repeated practice. Listing them together creates a reinforcing cluster—practicing one (patience) supports others (peace, gentleness).",
                es: "La metáfora del 'fruto' sugiere crecimiento en el tiempo, no logro instantáneo. La ciencia conductual confirma: las virtudes son hábitos formados a través de práctica repetida. Listarlos juntos crea un grupo reforzante—practicar uno (paciencia) apoya a otros (paz, benignidad).",
                sources: [
                    { type: "peer-reviewed", citation: "Peterson, C. & Seligman, M.E.P. (2004). Character Strengths and Virtues: A Handbook and Classification. Oxford University Press.", citationEs: "Peterson, C. & Seligman, M.E.P. (2004). Fortalezas de Carácter y Virtudes: Un Manual y Clasificación. Oxford University Press." },
                    { type: "peer-reviewed", citation: "Baumeister, R.F. & Tierney, J. (2011). Willpower: Rediscovering the Greatest Human Strength. Penguin.", citationEs: "Baumeister, R.F. & Tierney, J. (2011). Fuerza de Voluntad: Redescubriendo la Mayor Fortaleza Humana. Penguin." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Character strengths research supports virtue cultivation; application to this specific list is interpretive.",
                    es: "La investigación sobre fortalezas de carácter apoya el cultivo de virtudes; la aplicación a esta lista específica es interpretativa."
                }
            },
            nudge: {
                en: "Pick one fruit from the list that feels weakest in your life right now. For the next week, focus only on that one. Notice opportunities to practice it. Small, repeated actions grow into character traits. Which fruit will you tend today?",
                es: "Elegí un fruto de la lista que se sienta más débil en tu vida ahora mismo. Durante la próxima semana, enfocate solo en ese. Notá oportunidades para practicarlo. Pequeñas acciones repetidas crecen en rasgos de carácter. ¿Qué fruto vas a cultivar hoy?",
                sources: [],
                confidenceLevel: "interpretation",
                disclaimer: {
                    en: "This practical application is devotional in nature and reflects one possible response to the text.",
                    es: "Esta aplicación práctica es de naturaleza devocional y refleja una posible respuesta al texto."
                }
            }
        }
    },
    {
        id: "1-corinthians-13-4-7",
        book: { en: "1 Corinthians", es: "1 Corintios" },
        chapter: 13,
        verse: "4-7",
        text: {
            en: "Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up, doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil; rejoiceth not in iniquity, but rejoiceth in the truth; beareth all things, believeth all things, hopeth all things, endureth all things.",
            es: "El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece; no hace nada indebido, no busca lo suyo, no se irrita, no guarda rencor; no se goza de la injusticia, mas se goza de la verdad. Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta."
        },
        analysis: {
            historical: {
                en: "Paul wrote to Corinth around 53-55 AD, addressing a church torn by factions and spiritual pride. Some boasted about dramatic spiritual gifts. Paul's 'love chapter' was a corrective: gifts without love are worthless. This wasn't romantic advice—it was community repair.",
                es: "Pablo escribió a Corinto alrededor del 53-55 d.C., dirigiéndose a una iglesia dividida por facciones y orgullo espiritual. Algunos se jactaban de dones espirituales dramáticos. El 'capítulo del amor' de Pablo era un correctivo: los dones sin amor son inútiles. Esto no era consejo romántico—era reparación comunitaria.",
                sources: [
                    { type: "academic", citation: "Fee, G.D. (1987). The First Epistle to the Corinthians. NICNT. Eerdmans.", citationEs: "Fee, G.D. (1987). La Primera Epístola a los Corintios. NICNT. Eerdmans." },
                    { type: "academic", citation: "Thiselton, A.C. (2000). The First Epistle to the Corinthians. NIGTC. Eerdmans.", citationEs: "Thiselton, A.C. (2000). La Primera Epístola a los Corintios. NIGTC. Eerdmans." },
                    { type: "archaeological", citation: "Murphy-O'Connor, J. (2002). St. Paul's Corinth: Texts and Archaeology (3rd ed.). Liturgical Press.", citationEs: "Murphy-O'Connor, J. (2002). La Corinto de San Pablo: Textos y Arqueología (3ra ed.). Liturgical Press." }
                ],
                confidenceLevel: "consensus",
                disclaimer: {
                    en: "Pauline authorship of 1 Corinthians is undisputed; the Corinthian context is well-documented archaeologically.",
                    es: "La autoría paulina de 1 Corintios es indiscutida; el contexto corintio está bien documentado arqueológicamente."
                }
            },
            economic: {
                en: "Corinth was wealthy from trade—a major port city. Economic disparity created tension in the church; wealthy members shamed poorer ones at communal meals. Love that 'seeketh not her own' directly challenged Corinthian acquisitiveness and status competition.",
                es: "Corinto era rica por el comercio—una ciudad portuaria importante. La disparidad económica creaba tensión en la iglesia; miembros ricos avergonzaban a los más pobres en las comidas comunitarias. El amor que 'no busca lo suyo' desafiaba directamente la codicia corintia y la competencia por estatus.",
                sources: [
                    { type: "academic", citation: "Theissen, G. (1982). The Social Setting of Pauline Christianity: Essays on Corinth. Fortress Press.", citationEs: "Theissen, G. (1982). El Marco Social del Cristianismo Paulino: Ensayos sobre Corinto. Fortress Press." },
                    { type: "archaeological", citation: "Bookidis, N. & Stroud, R.S. (1997). The Sanctuary of Demeter and Kore: Topography and Architecture. ASCSA.", citationEs: "Bookidis, N. & Stroud, R.S. (1997). El Santuario de Deméter y Kore: Topografía y Arquitectura. ASCSA." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            social: {
                en: "Corinthian culture prized rhetoric, wisdom displays, and social climbing. The church mirrored this—members competed for status based on spiritual gifts. Paul's description of love as 'not puffed up' and 'not vaunteth' directly confronted Corinthian social values.",
                es: "La cultura corintia valoraba la retórica, las demostraciones de sabiduría y el ascenso social. La iglesia reflejaba esto—los miembros competían por estatus basado en dones espirituales. La descripción de Pablo del amor como 'no se envanece' y 'no es jactancioso' confrontaba directamente los valores sociales corintios.",
                sources: [
                    { type: "academic", citation: "Winter, B.W. (2001). After Paul Left Corinth: The Influence of Secular Ethics and Social Change. Eerdmans.", citationEs: "Winter, B.W. (2001). Después de que Pablo Dejó Corinto: La Influencia de la Ética Secular y el Cambio Social. Eerdmans." },
                    { type: "academic", citation: "Horrell, D.G. (1996). The Social Ethos of the Corinthian Correspondence. T&T Clark.", citationEs: "Horrell, D.G. (1996). El Ethos Social de la Correspondencia Corintia. T&T Clark." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            political: {
                en: "Corinth was a Roman colony with strong patronage systems. Wealthy patrons expected honor from clients. Paul's love ethic—not seeking one's own, not keeping score—subverted patronage power dynamics. Christian community was to operate by different rules.",
                es: "Corinto era una colonia romana con fuertes sistemas de patronazgo. Los patrones ricos esperaban honor de sus clientes. La ética del amor de Pablo—no buscar lo propio, no llevar cuentas—subvertía las dinámicas de poder del patronazgo. La comunidad cristiana debía operar con reglas diferentes.",
                sources: [
                    { type: "academic", citation: "Chow, J.K. (1992). Patronage and Power: A Study of Social Networks in Corinth. Sheffield Academic Press.", citationEs: "Chow, J.K. (1992). Patronazgo y Poder: Un Estudio de Redes Sociales en Corinto. Sheffield Academic Press." },
                    { type: "academic", citation: "Clarke, A.D. (1993). Secular and Christian Leadership in Corinth. Brill.", citationEs: "Clarke, A.D. (1993). Liderazgo Secular y Cristiano en Corinto. Brill." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            author: {
                en: "Paul founded the Corinthian church and knew its problems intimately. His letters reveal frustration and deep affection intertwined. The love chapter stands out as pure poetry amid practical problem-solving—Paul the theologian becoming Paul the poet.",
                es: "Pablo fundó la iglesia corintia y conocía sus problemas íntimamente. Sus cartas revelan frustración y profundo afecto entrelazados. El capítulo del amor destaca como poesía pura en medio de solución práctica de problemas—Pablo el teólogo convirtiéndose en Pablo el poeta.",
                sources: [
                    { type: "academic", citation: "Hays, R.B. (1997). First Corinthians. Interpretation. John Knox Press.", citationEs: "Hays, R.B. (1997). Primera Corintios. Interpretation. John Knox Press." },
                    { type: "academic", citation: "Collins, R.F. (1999). First Corinthians. Sacra Pagina. Liturgical Press.", citationEs: "Collins, R.F. (1999). Primera Corintios. Sacra Pagina. Liturgical Press." }
                ],
                confidenceLevel: "consensus",
                disclaimer: null
            },
            neuroscience: {
                en: "Each love characteristic maps to specific neural regulations: patience requires impulse control (prefrontal cortex); not being easily provoked involves amygdala regulation; bearing all things engages stress resilience systems. Love, neurologically, is disciplined emotion management.",
                es: "Cada característica del amor se mapea a regulaciones neuronales específicas: la paciencia requiere control de impulsos (corteza prefrontal); no irritarse involucra regulación de la amígdala; soportar todo activa sistemas de resiliencia al estrés. El amor, neurológicamente, es gestión emocional disciplinada.",
                sources: [
                    { type: "peer-reviewed", citation: "Gross, J.J. (2015). Emotion regulation: Current status and future prospects. Psychological Inquiry, 26(1), 1-26.", citationEs: "Gross, J.J. (2015). Regulación emocional: Estado actual y perspectivas futuras. Psychological Inquiry, 26(1), 1-26." },
                    { type: "peer-reviewed", citation: "Davidson, R.J. & Begley, S. (2012). The Emotional Life of Your Brain. Hudson Street Press.", citationEs: "Davidson, R.J. & Begley, S. (2012). La Vida Emocional de Tu Cerebro. Hudson Street Press." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Emotion regulation research is robust; mapping specific virtues to neural circuits is interpretive.",
                    es: "La investigación sobre regulación emocional es robusta; mapear virtudes específicas a circuitos neurales es interpretativo."
                }
            },
            behavioral: {
                en: "Paul's list uses concrete behaviors, not vague feelings. Behavioral science confirms: love is actions, not just emotions. Each item can be practiced deliberately—choosing patience, resisting envy, forgiving offenses. Love becomes a skill developed through intentional practice.",
                es: "La lista de Pablo usa comportamientos concretos, no sentimientos vagos. La ciencia conductual confirma: el amor son acciones, no solo emociones. Cada elemento puede practicarse deliberadamente—elegir paciencia, resistir la envidia, perdonar ofensas. El amor se convierte en una habilidad desarrollada a través de práctica intencional.",
                sources: [
                    { type: "peer-reviewed", citation: "Fredrickson, B.L. (2013). Love 2.0: Creating Happiness and Health in Moments of Connection. Plume.", citationEs: "Fredrickson, B.L. (2013). Amor 2.0: Creando Felicidad y Salud en Momentos de Conexión. Plume." },
                    { type: "peer-reviewed", citation: "Gottman, J.M. & Silver, N. (2012). What Makes Love Last? Simon & Schuster.", citationEs: "Gottman, J.M. & Silver, N. (2012). ¿Qué Hace que el Amor Dure? Simon & Schuster." }
                ],
                confidenceLevel: "scholarly-debate",
                disclaimer: {
                    en: "Love as behavior is supported by relationship research; application to this list is interpretive.",
                    es: "El amor como comportamiento está apoyado por investigación en relaciones; la aplicación a esta lista es interpretativa."
                }
            },
            nudge: {
                en: "Read through the list slowly. Which description made you uncomfortable—hinting at an area needing growth? Choose that one. In your next difficult interaction, consciously apply it. Love is built one choice at a time.",
                es: "Leé la lista lentamente. ¿Qué descripción te hizo sentir incómodo—sugiriendo un área que necesita crecimiento? Elegí esa. En tu próxima interacción difícil, aplicala conscientemente. El amor se construye una elección a la vez.",
                sources: [],
                confidenceLevel: "interpretation",
                disclaimer: {
                    en: "This practical application is devotional in nature and reflects one possible response to the text.",
                    es: "Esta aplicación práctica es de naturaleza devocional y refleja una posible respuesta al texto."
                }
            }
        }
    }
];

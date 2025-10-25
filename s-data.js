const SUBJECT_DATA = {
            'math': {
                icon: '📐', color: '#1e40af', title: { en: 'Mathematics', ar: 'الرياضيات' }, description: { en: 'Explore the world of numbers, shapes, and logical reasoning for Grade 6.', ar: 'استكشف عالم الأرقام، الأشكال، والمنطق الرياضي للصف السادس.' },
                blocks: [
                    { id: 1, title: { en: 'Block 1: Properties of Numbers', ar: 'الوحدة 1: خواص الأعداد' }, brief: { en: 'Negative numbers, operations, divisibility, factors, primes, and squares.', ar: 'الأعداد السالبة، العمليات، قابلية القسمة، العوامل، الأعداد الأولية، والمربعات.' },
                        
                        // PDFs for the separate "Block Sheets" page
                        block_resources: {
                            pdfs: {
                                main: 'Maths-Grade6-B1-All-Sheet1 - Main.pdf',
                                cw: 'math-1-1-cw.pdf',
                                hw: 'math-1-1-hw.pdf',
                                ss: 'math-1-1-ss.pdf',
                                re: 'math-1-1-re.pdf'
                            }
                        },
                        lessons: [
                            // Lesson 101
                            { id: 101, title: { en: 'Using real-life situations to introduce negative numbers', ar: 'استخدام مواقف حياتية لتقديم الأعداد السالبة' }, brief: { en: 'Recognize integers, order them on number lines, and add/subtract in context.', ar: 'التعرف على الأعداد الصحيحة وترتيبها على خط الأعداد، وجمعها وطرحها.' },
                                content: {
                                    theory: {
                                        en: `
                                            <h3>What are Negative Numbers?</h3>
                                            <p>Integers are whole numbers and their opposites. They can be positive, negative, or zero.</p>
                                                                                        <ul>
                                                <li>Positive integers are greater than 0 (e.g., +1, +2, +3...).</li>
                                                <li>Negative integers are less than 0 (e.g., -1, -2, -3...).</li>
                                                <li>Zero (0) is neither positive nor negative.</li>
                                            </ul>
                                            <p>Real-life examples include temperatures below zero, altitudes below sea level, or debts.</p>
                                            <div class="example-box">
                                                <strong>Example:</strong> Sea level is 0 meters. An iceberg might extend 10 meters above sea level (+10m) and 80 meters below sea level (-80m).
                                            </div>
                                            <h3>Adding and Subtracting Integers</h3>
                                            <p>Follow these rules:</p>
                                            <ul>
                                                <li>Positive + Positive = Add (e.g., 4 + 6 = 10)</li>
                                                <li>Positive + Negative (Positive larger) = Subtract (e.g., 16 + (-7) = 9)</li>
                                                <li>Positive + Negative (Negative larger) = Subtract (e.g., 5 + (-11) = -6)</li>
                                                <li>Negative + Negative = Add (e.g., (-3) + (-4) = -7)</li>
                                                <li>Subtracting a negative is the same as adding a positive (e.g., 5 - (-6) = 5 + 6 = 11)</li>
                                            </ul>
                                            <p>A number line can help visualize these operations.</p>
                                        `,
                                        ar: `
                                            <h3>ما هي الأعداد السالبة؟</h3>
                                            <p>الأعداد الصحيحة هي الأعداد الكاملة (بدون كسور) وأضدادها. يمكن أن تكون موجبة أو سالبة أو صفر.</p>
                                                                                        <ul>
                                                <li>الأعداد الصحيحة الموجبة أكبر من الصفر (مثل +1، +2، +3...).</li>
                                                <li>الأعداد الصحيحة السالبة أصغر من الصفر (مثل -1، -2، -3...).</li>
                                                <li>الصفر (0) ليس موجباً ولا سالباً.</li>
                                            </ul>
                                            <p>أمثلة من الحياة الواقعية تشمل درجات الحرارة تحت الصفر، الارتفاعات تحت مستوى سطح البحر، أو الديون.</p>
                                            <div class="example-box">
                                                <strong>مثال:</strong> مستوى سطح البحر هو 0 متر. قد يمتد جبل جليدي 10 أمتار فوق سطح البحر (+10م) و 80 متراً تحت سطح البحر (-80م).
                                            </div>
                                            <h3>جمع وطرح الأعداد الصحيحة</h3>
                                            <p>اتبع هذه القواعد:</p>
                                            <ul>
                                                <li>موجب + موجب = جمع (مثال: 4 + 6 = 10)</li>
                                                <li>موجب + سالب (الموجب أكبر) = طرح (مثال: 16 + (-7) = 9)</li>
                                                <li>موجب + سالب (السالب أكبر) = طرح (مثال: 5 + (-11) = -6)</li>
                                                <li>سالب + سالب = جمع (مثال: (-3) + (-4) = -7)</li>
                                                <li>طرح عدد سالب هو نفسه جمع نظيره الموجب (مثال: 5 - (-6) = 5 + 6 = 11)</li>
                                            </ul>
                                            <p>يمكن لخط الأعداد المساعدة في تصور هذه العمليات.</p>
                                        `
                                    },
                                    exercises: [
                                        { id: 1, type: 'true_false', question: { en: 'Is 9 > 7?', ar: 'هل 9 > 7؟' } },
                                        { id: 2, type: 'true_false', question: { en: 'Is 5 < -6?', ar: 'هل 5 < -6؟' } },
                                        { id: 3, type: 'compare', question: { en: 'Put the correct sign (> or <): -5 ... 4', ar: 'ضع العلامة المناسبة (> أو <): -5 ... 4' } },
                                        { id: 4, type: 'calculate', question: { en: 'Calculate: -3 + 4', ar: 'احسب: -3 + 4' } },
                                        { id: 5, type: 'calculate', question: { en: 'Calculate: 6 + (-5)', ar: 'احسب: 6 + (-5)' } },
                                        { id: 6, type: 'calculate', question: { en: 'Calculate: 4 - 6', ar: 'احسب: 4 - 6' } },
                                        { id: 7, type: 'calculate', question: { en: 'Calculate: 1 - (-8)', ar: 'احسب: 1 - (-8)' } },
                                        { id: 8, type: 'word_problem', question: { en: 'Temperature starts at 4°C and goes down by 10 degrees. What is the new temperature?', ar: 'تبدأ درجة الحرارة عند 4°م وتنخفض بمقدار 10 درجات. ما هي درجة الحرارة الجديدة؟' } },
                                    ]
                                },
                                // Resources for Lesson 101 (Video and Quiz only)
                                resources: {
                                    video: 'math-1-1.mp4',
                                    quiz: [
                                        { id: 1, q: { en: 'What is -5 + 3 ?', ar: 'ما هو ناتج -5 + 3 ؟' }, options: ['-8', '-2', '2', '8'], answer: '-2' },
                                        { id: 2, q: { en: 'Which number is greater: -10 or -2?', ar: 'أي رقم أكبر: -10 أم -2؟' }, options: ['-10', '-2'], answer: '-2' },
                                        { id: 3, q: { en: 'A temperature starts at 5° and drops by 8°. What is the new temperature?', ar: 'الحرارة 5° وانخفضت 8°. ما هي الحرارة الجديدة؟' }, options: ['-3°', '3°', '13°'], answer: '-3°' },
                                        { id: 4, q: { en: 'What is 5 - (-6) ?', ar: 'ما هو ناتج 5 - (-6) ؟' }, options: ['-1', '1', '11', '-11'], answer: '11' },
                                        { id: 5, q: { en: 'Which statement is TRUE?', ar: 'أي عبارة صحيحة؟' }, options: ['5 < -6', '-5 > 4', '-3 + 4 = -1', '1 - (-8) = 9'], answer: '1 - (-8) = 9' }
                                    ]
                                }
                            },
                            // ===================================
                            // [!!!] START OF MODIFICATION [!!!]
                            // ===================================
                            // Lesson 102 - Updated Resources with Quiz
                            { id: 102, title: { en: 'Using the order of operations and brackets (BODMAS)', ar: 'استخدام ترتيب العمليات والأقواس (BODMAS)' }, brief: { en: 'Use BODMAS to work out calculations.', ar: 'استخدام BODMAS لحل العمليات الحسابية.' },
                                content: {
                                    theory: {
                                        en: `<h3>BODMAS</h3><p>BODMAS tells you the correct order to carry out mathematical operations:</p><ul><li><b>B</b>rackets</li><li><b>O</b>rders (powers/roots)</li><li><b>D</b>ivision and <b>M</b>ultiplication (left to right)</li><li><b>A</b>ddition and <b>S</b>ubtraction (left to right)</li></ul><div class="example-box">Example: 5 + 2 x 3 = 5 + 6 = 11 (Multiplication first)</div>`,
                                        ar: `<h3>BODMAS (ترتيب العمليات)</h3><p>يخبرك BODMAS بالترتيب الصحيح لإجراء العمليات الحسابية:</p><ul><li><b>B</b>rackets (الأقواس)</li><li><b>O</b>rders (الأسس/الجذور)</li><li><b>D</b>ivision and <b>M</b>ultiplication (القسمة والضرب - من اليسار لليمين)</li><li><b>A</b>ddition and <b>S</b>ubtraction (الجمع والطرح - من اليسار لليمين)</li></ul><div class="example-box">مثال: 5 + 2 × 3 = 5 + 6 = 11 (الضرب أولاً)</div>`
                                    },
                                    exercises: [ // Exercises extracted from the PDFs
                                        { id: 1, type: 'calculate', question: { en: 'Solve: $(20+12)\div4$', ar: 'حل: $(20+12)\div4$' } }, // From PDF 1
                                        { id: 2, type: 'calculate', question: { en: 'Solve: $50+ 6\times (11 - 4)$', ar: 'حل: $50+ 6\times (11 - 4)$' } }, // From PDF 1
                                        { id: 3, type: 'calculate', question: { en: 'Solve: $9\times(12-8)+28\div7$', ar: 'حل: $9\times(12-8)+28\div7$' } }, // From PDF 1
                                        { id: 4, type: 'calculate', question: { en: 'Solve: $(40+14)\div6$', ar: 'حل: $(40+14)\div6$' } }, // From PDF 2
                                        { id: 5, type: 'calculate', question: { en: 'Solve: $40\times(14-6)$', ar: 'حل: $40\times(14-6)$' } }, // From PDF 2
                                        { id: 6, type: 'calculate', question: { en: 'Solve: $35+6\times(30-23)$', ar: 'حل: $35+6\times(30-23)$' } }, // From PDF 2
                                    ]
                                },
                                resources: {
                                    pdfs: [
                                        { name: { en: 'Worksheet 1 PDF', ar: 'ورقة عمل 1' }, url: 'Order of operations.pdf' },
                                        { name: { en: 'Worksheet 2 PDF', ar: 'ورقة عمل 2' }, url: 'Order of operations 2.pdf' }
                                    ],
                                     video: 'math-1-2.mp4',
                                     // [جديد] تم إضافة اختبار لدرس ترتيب العمليات
                                     quiz: [
                                        { id: 1, q: { en: 'Calculate: $2 + 3 \times 4$', ar: 'احسب: $2 + 3 \times 4$' }, options: ['20', '14', '9', '24'], answer: '14' }, // Video Example
                                        { id: 2, q: { en: 'Calculate: $(20+12) \div 4$', ar: 'احسب: $(20+12) \div 4$' }, options: ['23', '5', '8', '32'], answer: '8' }, // PDF 1, Q1
                                        { id: 3, q: { en: 'Calculate: $18 \div 6 - 3$', ar: 'احسب: $18 \div 6 - 3$' }, options: ['0', '1', '6', '15'], answer: '0' }, // Video Example
                                        { id: 4, q: { en: 'Calculate: $9 \times (12-8) + 28 \div 7$', ar: 'احسب: $9 \times (12-8) + 28 \div 7$' }, options: ['40', '30', '36', '11'], answer: '40' }, // PDF 1, Q4
                                        { id: 5, q: { en: 'Calculate: $35 + 6 \times (30-23)$', ar: 'احسب: $35 + 6 \times (30-23)$' }, options: ['275', '41', '192', '77'], answer: '77' } // PDF 2, Q3
                                     ]
                                }
                            },
                            // ===================================
                            // [!!!] END OF MODIFICATION [!!!]
                            // ===================================

                             // Lesson 103
                            { id: 103, title: { en: 'Recognizing multiples and using tests of divisibility', ar: 'تمييز المضاعفات واستخدام اختبارات قابلية القسمة' }, brief: { en: 'Simple tests for divisibility.', ar: 'اختبارات بسيطة لقابلية القسمة.' }, content: null,
                                resources: {
                                     video: 'https://drive.google.com/file/d/1B-c1AYH_FV5-Q4f_a-i3y-g-s2-E2s-S/view?usp=sharing'
                                }
                            },
                             // Lesson 104
                            { id: 104, title: { en: 'Factors and Primes', ar: 'العوامل والأعداد الأولية' }, brief: { en: 'Recognize factors, primes, and find LCM.', ar: 'تمييز العوامل والأعداد الأولية، وإيجاد م.م.أ.' }, content: null,
                                resources: {
                                    quiz: [
                                        { id: 1, q: { en: 'What are the factors of 12?', ar: 'ما هي عوامل العدد 12؟' }, options: ['1, 2, 3, 4, 6, 12', '1, 2, 3, 4, 8, 12', '1, 2, 4, 6, 12'], answer: '1, 2, 3, 4, 6, 12' },
                                        { id: 2, q: { en: 'Which of these is a prime number?', ar: 'أي من هذه الأعداد هو عدد أولي؟' }, options: ['9', '15', '17', '21'], answer: '17' },
                                        { id: 3, q: { en: 'What is the LCM (Lowest Common Multiple) of 4 and 6?', ar: 'ما هو المضاعf المشترك الأصغر للعددين 4 و 6؟' }, options: ['2', '4', '12', '24'], answer: '12' },
                                        { id: 4, q: { en: 'Which of these is NOT a factor of 30?', ar: 'أي من هذه الأعداد ليس من عوامل العدد 30؟' }, options: ['3', '5', '10', '8'], answer: '8' },
                                        { id: 5, q: { en: 'How many prime numbers are there between 1 and 10?', ar: 'كم عدد الأعداد الأولية بين 1 و 10؟' }, options: ['3', '4', '5', '6'], answer: '4' } // (2, 3, 5, 7)
                                    ]
                                }
                            },
                            // Placeholder Lessons
                            { id: 105, title: { en: 'Squares and Cubes', ar: 'المربعات والمكعبات' }, brief: { en: 'Calculate squares, cubes, and find their corresponding roots.', ar: 'حساب المربعات والمكعبات وإيجاد الجذور المقابلة لها.' }, content: null, resources: {} },
                            { id: 106, title: { en: 'Test Yourself (Unit 1)', ar: 'اختبر نفسك (الوحدة 1)' }, brief: { en: 'Review all outcomes of the unit.', ar: 'مراجعة جميع مخرجات الوحدة.' }, content: null, resources: {} }
                        ]
                    },
                    // Placeholder Blocks
                    { id: 2, title: { en: 'Block 2: Patterns and Sequences', ar: 'الوحدة 2: الأنماط والمتتاليات' }, brief: { en: 'Integer sequences and spatial patterns.', ar: 'المتتاليات العددية والأنماط المكانية.' }, lessons: [] },
                    { id: 3, title: { en: 'Block 3: Constructions', ar: 'الوحدة 3: الإنشاءات الهندسية' }, brief: { en: 'Measuring, drawing angles, lines, and constructing shapes.', ar: 'قياس ورسم الزوايا والخطوط وإنشاء الأشكال.' }, lessons: [] },
                    { id: 4, title: { en: 'Block 4: Probability 1', ar: 'الوحدة 4: الاحتمالات 1' }, brief: { en: 'The language of probability, scales, and fair games.', ar: 'لغة الاحتمالات، مقاييس الاحتمال، والألعاب العادلة.' }, lessons: [] },
                    { id: 5, title: { en: 'Block 5: (Placeholder)', ar: 'الوحدة 5: (محتوى مؤقت)' }, brief: { en: 'Placeholder content for Block 5', ar: 'محتوى مؤقت للالوحدة 5' }, lessons: [] },
                    { id: 6, title: { en: 'Block 6: (Placeholder)', ar: 'الوحدة 6: (محتوى مؤقت)' }, brief: { en: 'Placeholder content for Block 6', ar: 'محتوى مؤقت للالوحدة 6' }, lessons: [] },
                ]
            },
            // Other Subjects (Placeholders)
            'english': { icon: '📝', color: '#3b82f6', title: { en: 'English Language Arts', ar: 'اللغة الإنجليزية' }, description: { en: 'Improve your reading comprehension...', ar: 'طور مهاراتك في فهم المقروء...' }, blocks: Array.from({ length: 6 }, (_, i) => ({ id: i + 1, title: { en: `Unit ${i + 1}`, ar: `الوحدة ${i+1}` }, brief: { en: `Content for Unit ${i + 1}`, ar:`محتوى الوحدة ${i+1}` }, lessons: [] })) },
            'science': { icon: '🔬', color: '#10b981', title: { en: 'Science', ar: 'العلوم' }, description: { en: 'Discover the natural world...', ar: 'اكتشف العالم الطبيعي...' }, blocks: Array.from({ length: 6 }, (_, i) => ({ id: i + 1, title: { en: `Unit ${i + 1}`, ar: `الوحدة ${i+1}` }, brief: { en: `Content for Unit ${i + 1}`, ar:`محتوى الوحدة ${i+1}` }, lessons: [] })) },
            'social': { icon: '🌍', color: '#ef4444', title: { ar: 'الدراسات الاجتماعية' }, description: { ar: 'دراسة شاملة للتاريخ والجغرافيا...' }, blocks: Array.from({ length: 6 }, (_, i) => ({ id: i + 1, title: { ar: `الوحدة ${i + 1}` }, brief: { ar: `محتوى الوحدة ${i + 1}` }, lessons: [] })) },
            'ict': { icon: '💻', color: '#6366f1', title: { en: 'Information & Communication Technology', ar: 'تكنولوجيا المعلومات والاتصالات' }, description: { en: 'Essential knowledge of coding...', ar: 'المعرفة الأساسية بالبرمجة...' }, blocks: Array.from({ length: 6 }, (_, i) => ({ id: i + 1, title: { en: `Module ${i + 1}`, ar: `الوحدة ${i+1}` }, brief: { en: `Content for Module ${i + 1}`, ar:`محتوى الوحدة ${i+1}` }, lessons: [] })) },
            'arabic': { icon: '🕌', color: '#d97706', title: { ar: 'اللغة العربية' }, description: { ar: 'تعزيز مهارات القراءة والكتابة...' }, blocks: Array.from({ length: 6 }, (_, i) => ({ id: i + 1, title: { ar: `الوحدة ${i + 1}` }, brief: { ar: `محتوى الوحدة ${i + 1}` }, lessons: [] })) },
            'religion': { icon: '🕊️', color: '#f59e0b', title: { ar: 'التربية الدينية' }, description: { ar: 'تعاليم وأخلاقيات الدين.' }, blocks: Array.from({ length: 6 }, (_, i) => ({ id: i + 1, title: { ar: `الفصل ${i + 1}` }, brief: { ar: `محتوى الفصل ${i + 1}` }, lessons: [] })) },
            'french': { icon: '🇫🇷', color: '#8b5cf6', title: { en: 'French Language', ar: 'اللغة الفرنسية' }, description: { en: 'Introduction to French vocabulary...', ar: 'مقدمة للمفردات والقواعد...' }, blocks: Array.from({ length: 6 }, (_, i) => ({ id: i + 1, title: { en: `Unité ${i + 1}`, ar: `الوحدة ${i+1}` }, brief: { en: `Content for Unité ${i + 1}`, ar:`محتوى الوحدة ${i+1}` }, lessons: [] })) },
        };
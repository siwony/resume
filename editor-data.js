window.RESUME_EDITOR_DEFAULT_DATA = {
  version: 1,
  assets: {
    profilePhoto: "profile-photo.png"
  },
  design: {
    common: {
      paperWidth: "210mm",
      paperHeight: "297mm",
      background: "#eef1f5",
      ink: "#202124",
      muted: "#5f6368",
      title: "#111827",
      fontFamily: "\"Apple SD Gothic Neo\", \"Pretendard\", \"Noto Sans KR\", \"Malgun Gothic\", Arial, sans-serif"
    },
    documents: {
      resume: {
        label: "이력서",
        filename: "resume.html",
        title: "정시원 이력서",
        pageX: "16mm",
        pageY: "15mm",
        fontSize: "9.6pt",
        lineHeight: "1.55",
        accent: "#1f5fbf",
        accentSoft: "#edf4ff",
        line: "#dadce0",
        softLine: "#eceff3"
      },
      portfolio: {
        label: "포트폴리오",
        filename: "portfolio.html",
        title: "정시원 포트폴리오",
        pageX: "15mm",
        pageY: "14mm",
        fontSize: "8.8pt",
        lineHeight: "1.45",
        accent: "#17675a",
        accentSoft: "#eaf7f4",
        line: "#d8dde5",
        softLine: "#edf0f4"
      },
      career: {
        label: "경력기술서",
        filename: "career-description.html",
        title: "정시원 경력기술서",
        pageX: "15mm",
        pageY: "13.5mm",
        fontSize: "8.75pt",
        lineHeight: "1.44",
        accent: "#2457a6",
        accentSoft: "#edf4ff",
        line: "#d8dde5",
        softLine: "#edf0f4"
      }
    }
  },
  documents: {
    resume: {
      key: "resume",
      pages: [
        {
          mark: "정시원 이력서 1 / 2",
          footer: "정시원 · Software Engineer",
          blocks: [
            {
              type: "resumeHero",
              docLabel: "Resume",
              name: "정시원",
              role: "소프트웨어 엔지니어",
              photoAlt: "정시원 프로필 사진",
              contacts: [
                {
                  label: "Email",
                  text: "official.siwony@gmail.com",
                  href: "mailto:official.siwony@gmail.com"
                },
                {
                  label: "GitHub",
                  text: "github.com/siwony",
                  href: "https://github.com/siwony"
                },
                {
                  label: "Blog",
                  text: "blog.siwony.xyz",
                  href: "https://blog.siwony.xyz/"
                },
                {
                  label: "Phone",
                  text: "010-3629-3839",
                  href: ""
                }
              ]
            },
            {
              type: "textSection",
              className: "self-introduction",
              heading: "자기소개",
              bodyClass: "intro",
              body: "안녕하세요. 3년차 소프트웨어 개발자 정시원입니다. 운영 중인 서비스의 병목 분석, 레거시 개선, 장애 대응을 통해 시스템 안정성을 높여 온 백엔드 엔지니어입니다. 신규 기능 개발 시에도 운영 경험을 바탕으로 확장 가능한 구조를 설계합니다."
            },
            {
              type: "achievements",
              heading: "대표 경험",
              items: [
                {
                  title: "NCDS 스토리지 병목 개선 - 네오컨버전스",
                  body: "CIFS 마운트 경로를 공인망(1Gbps)에서 사설망(10Gbps)으로 전환하여 파일 처리 성능을 약 2~3배 개선했습니다. 슬로우 쿼리 튜닝으로 조회 응답 시간을 3초에서 0.1초로 단축했습니다."
                },
                {
                  title: "On-Air/Ad 레거시 마이그레이션 - 네오컨버전스",
                  body: "Spring Framework 4.1에서 5.3.39로 업그레이드하고 종속성 충돌을 해결했습니다. Scouter 기반 서버 메트릭(CPU, Memory, Storage) 자동 리포트 체계를 구축했습니다."
                },
                {
                  title: "엘리베이터 콜 시스템 안정화 - HTBeyond",
                  body: "TCP/IP 소켓 통신에서 Netty NioEventLoopGroup 구조를 최적화하여, 최대 2,000개 이상 증가하던 스레드를 약 200개 수준으로 안정화했습니다."
                },
                {
                  title: "홈넷 연동 아키텍처 설계 및 구현 - HTBeyond",
                  body: "기존 단일 홈넷사로 연동된 서비스를 여러 홈넷사가 연동 가능한 아키텍처로 설계·개발했습니다. 하위 호환성을 유지하면서 여러 홈넷사를 연동할 수 있도록 코드 레벨의 추상화를 진행했습니다."
                }
              ]
            }
          ]
        },
        {
          mark: "정시원 이력서 2 / 2",
          footer: "정시원 · Software Engineer",
          blocks: [
            {
              type: "itemStack",
              heading: "Continuous Learning",
              summary: "사내에서 업무와 병행했던 기술 공유 이력입니다.",
              items: [
                {
                  title: "VO 사실과 오해",
                  body: "DDD의 VO와 Controller 계층에서 사용하는 VO 객체를 혼용하지 말자는 취지로 발표한 내용입니다. DDD에서의 VO와 J2EE에서 시작된 VO에 관한 내용을 담고 있습니다.",
                  meta: ""
                },
                {
                  title: "유닛 테스트 책 스터디",
                  body: "블라디미르 코리코프 저자의 <a href=\"https://search.kyobobook.co.kr/search?keyword=%EB%B8%94%EB%9D%BC%EB%94%94%EB%AF%B8%EB%A5%B4%20%EC%BD%94%EB%A6%AC%EC%BD%94%ED%94%84&amp;chrcCode=2003693201\">유닛 테스트</a>를 기반으로 실무 적용 스터디를 진행했습니다. Parameterized 테스트를 통해 장황했던 테스트를 개선한 경험이 있습니다.",
                  meta: "<a href=\"https://github.com/siwony/TIL/tree/main/Book/%EC%9C%A0%EB%8B%9B%ED%85%8C%EC%8A%A4%ED%8A%B8\">스터디 정리 자료</a>"
                }
              ]
            },
            {
              type: "datedListColumns",
              columns: [
                {
                  heading: "Certificates",
                  listClass: "certificate-list",
                  items: [
                    {
                      date: "2024-08",
                      text: "<a href=\"https://www.credly.com/badges/a2320f12-e8cf-4617-b1f4-0fe00150cc5d/linked_in_profile\">AWS Certified Developer - Associate (DVA-C02)</a>"
                    },
                    {
                      date: "2022-04",
                      text: "SQL 개발자 - 제45회"
                    },
                    {
                      date: "2021-12",
                      text: "정보처리기능사"
                    }
                  ]
                },
                {
                  heading: "Prize",
                  listClass: "prize-list",
                  items: [
                    {
                      date: "2020-11<br>~ 2020-12",
                      text: "<a href=\"https://www.jungle.co.kr/contest/202514\">2020 인공지능(AI) 문제 해결 아이디어 공모전</a> 최우수상"
                    },
                    {
                      date: "2020-09<br>~ 2020-11",
                      text: "<a href=\"https://www.kdn.com/event.kdn?mid=a10111060100&amp;act=view&amp;event_seq=20&amp;event_status=I\">2020 한전 KDN 빛가람 에너지밸리 소프트웨어 작품 경진대회</a> 장려상"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    portfolio: {
      key: "portfolio",
      pages: [
        {
          mark: "정시원 포트폴리오 1 / 2",
          footer: "정시원 · Portfolio",
          blocks: [
            {
              type: "docHeader",
              docLabel: "Portfolio",
              title: "정시원 포트폴리오",
              headline: "개인 서비스와 팀 프로젝트를 통해 백엔드 설계, 인증, 배포, 알림, 관리자 기능을 구현했습니다.",
              sideClass: "contact",
              side: "Software Engineer<br><a href=\"https://blog.siwony.xyz/\">blog.siwony.xyz</a>"
            },
            {
              type: "portfolioProject",
              title: "my-blog",
              period: "서비스 기간: 2025.12 ~ ing · 개발 기간: 2025.07 ~ ing",
              links: [
                {
                  label: "URL",
                  href: "https://blog.siwony.xyz/"
                }
              ],
              summary: "바이브코딩으로 만든 간단한 마크다운 기반 개인 개발 블로그입니다.",
              columns: [
                {
                  title: "기대 효과",
                  items: [
                    "개발 시 공부한 내용과 나만의 인사이트를 글로 남길 수 있습니다."
                  ]
                },
                {
                  title: "담당 업무",
                  items: [
                    "CloudFront를 통한 정적 웹사이트 배포",
                    "프롬프팅을 통한 전반적인 기능 개발"
                  ]
                }
              ],
              effect: null
            },
            {
              type: "portfolioProject",
              title: "HiRecruit",
              period: "개발 기간: 2022.03 ~ 2022.05 · 서비스 기간: 2022.05 ~ 2022.08",
              links: [
                {
                  label: "GitHub",
                  href: "https://github.com/themoment-team/HiRecruit-server"
                }
              ],
              summary: "IT 직군 취업 준비생을 위한 쉽고 빠른 멘토링을 제공하는 프로젝트입니다.",
              columns: [
                {
                  title: "프로젝트 설명",
                  items: [
                    "취업자는 프로필을 등록할 수 있습니다.",
                    "취업 준비생은 등록된 취업자에게 멘토 신청을 할 수 있습니다."
                  ]
                },
                {
                  title: "담당 업무",
                  items: [
                    "<a href=\"https://i.imgur.com/btGEM5I.png\">ERD 설계</a>",
                    "Spring Security OAuth2 Client를 이용한 GitHub 소셜 인증 구현",
                    "재직자 프로필 등록/수정 기능 구현"
                  ]
                }
              ],
              effect: {
                title: "기대 효과",
                paragraphs: [
                  "취업 준비생의 편리한 멘토링 신청을 지원합니다.",
                  "학교 입장에서 강연과 같은 강사의 인재풀 확보에 도움이 됩니다.",
                  "멘토링을 받은 재학생들의 졸업 후 진로 방향 설정에 도움이 됩니다."
                ]
              }
            }
          ]
        },
        {
          mark: "정시원 포트폴리오 2 / 2",
          footer: "정시원 · Portfolio",
          blocks: [
            {
              type: "portfolioProject",
              title: "every-moment",
              period: "서비스 기간: 2021.06 ~ 2022.01 · 개발 기간: 2021.02 ~ 2021.06",
              links: [
                {
                  label: "GitHub",
                  href: "https://github.com/themoment-team/K2-server"
                },
                {
                  label: "About",
                  href: "https://github.com/themoment-team/the_moment_about/tree/main"
                },
                {
                  label: "Reference",
                  href: "https://toss.im/every-moment"
                }
              ],
              summary: "toss의 “금융이 불편한 순간”을 모티브로 개발한, 학교가 개선되기 위해 학생 관점에서 느끼는 불편한 순간을 기록하는 공간입니다.",
              columns: [
                {
                  title: "프로젝트 설명",
                  items: [
                    "학생들의 불편한 순간을 작성하고, 이를 교직원이 조회할 수 있도록 하는 공간입니다.",
                    "불편함에 대한 공감 기능과 공감 상위 10개의 불편함 조회 기능을 제공합니다.",
                    "학교 측에서 해결한 불편함을 게시하고 조회할 수 있는 기능을 제공합니다.",
                    "2021년 11월 기준 고유 방문자 880명을 기록했습니다."
                  ]
                },
                {
                  title: "담당 업무",
                  items: [
                    "불편한 순간에 답변을 달고 개선 사항을 알려주는 관리자(Admin) 기능 개발",
                    "로그인 유지를 위한 JWT Refresh Token 구현",
                    "불편한 순간을 공감 수 상위 10개로 보여주는 TOP 10 기능 구현",
                    "JPQL을 코드로 작성할 수 있는 이점을 얻기 위해 Querydsl 도입"
                  ]
                }
              ],
              effect: {
                title: "기대 효과",
                paragraphs: [
                  "학생과 학교에 대한 소통 창구를 제공합니다.",
                  "여러 학생의 의견을 종합하여 더 나은 학교를 만들어 나갈 수 있습니다."
                ]
              }
            },
            {
              type: "portfolioProject",
              title: "EZY",
              period: "개발 기간: 2021.04 ~ 2021.12",
              links: [
                {
                  label: "GitHub / About",
                  href: ""
                }
              ],
              summary: "더 가치 있는 삶을 만들기 위한 Personal Todo List입니다. 개인 일정과 팀 일정, 재미를 위한 심부름 기능이 존재합니다.",
              columns: [
                {
                  title: "기대 효과",
                  items: [
                    "개인의 효율적인 시간 관리",
                    "심부름 기능을 이용한 재미 제공"
                  ]
                },
                {
                  title: "담당 업무",
                  items: [
                    "ERD 설계",
                    "전반적인 Global Exception Handling 로직 작성",
                    "FCM 연동 및 push 알림 로직 설계",
                    "심부름 기능 개발"
                  ]
                }
              ],
              effect: null
            }
          ]
        }
      ]
    },
    career: {
      key: "career",
      pages: [
        {
          mark: "정시원 경력기술서 1 / 3",
          footer: "정시원 · Career Description",
          blocks: [
            {
              type: "docHeader",
              docLabel: "Career Description",
              title: "정시원 경력기술서",
              headline: "운영 중인 서비스의 병목 분석, 레거시 개선, 장애 대응을 중심으로 백엔드 시스템 안정성과 개발 품질을 개선했습니다.",
              sideClass: "profile",
              side: "Software Engineer<br>official.siwony@gmail.com"
            },
            {
              type: "careerSection",
              heading: "Work Experience",
              subheading: "",
              company: {
                name: "네오컨버전스",
                period: "2024.12 ~ 현재",
                description: "방송통신/디지털 미디어 솔루션 기업에서 SK Broadband 콘텐츠 관리 솔루션(NCDS)과 셋톱박스 기반 사내방송/매장 광고 솔루션(On-Air/On-Ad) 개발 및 유지보수를 수행하고 있습니다."
              },
              twoBlocks: [
                {
                  title: "담당 역할",
                  titleClass: "block-title",
                  items: [
                    "온프레미스 환경 웹서버 개발 및 유지보수",
                    "개발 생산성/품질 체계 도입 및 운영: GitLab, SonarQube",
                    "모니터링 리포트 자동화: Scouter 기반 리포트 자동화"
                  ]
                },
                {
                  title: "대표 성과",
                  titleClass: "block-title",
                  items: [
                    "CIFS 마운트 경로를 공인망(1Gbps)에서 사설망(10Gbps)으로 전환하여 파일 처리 성능 약 <span class=\"metric\">2~3배 개선</span>",
                    "Spring Framework 4.1에서 5.3.39로 업그레이드 수행",
                    "GitLab 도입 및 3개 프로젝트 마이그레이션, SonarQube 도입으로 취약점 조기 탐지 체계 구축"
                  ]
                }
              ],
              projects: []
            },
            {
              type: "careerSection",
              heading: "",
              subheading: "셋톱 관리 솔루션(On-Air/Ad) 개발 및 유지보수",
              company: null,
              twoBlocks: [],
              projects: [
                {
                  title: "업무 범위",
                  items: [
                    "셋톱박스 관리, 편성/운영 기능 개발 및 유지보수",
                    "Spring Framework 4.1에서 5.3.39로 업그레이드 수행",
                    "DB 성능 튜닝 및 트랜잭션 도입으로 데이터 일관성과 장애 리스크 개선",
                    "Scouter 기반 CPU, Memory, Disk 리포트 자동화 구축"
                  ],
                  note: ""
                },
                {
                  title: "DevEx / 품질 체계 구축",
                  items: [
                    "기존 git server에서 GitLab으로 3개 프로젝트를 마이그레이션하고 코드 리뷰 프로세스를 정착시켰습니다.",
                    "SonarQube를 도입하여 Path Traversal, SQL Injection 등 보안/품질 이슈를 개발 단계에서 사전 탐지하는 체계를 마련했습니다."
                  ],
                  note: ""
                }
              ]
            }
          ]
        },
        {
          mark: "정시원 경력기술서 2 / 3",
          footer: "정시원 · Career Description",
          blocks: [
            {
              type: "careerSection",
              heading: "Work Experience",
              subheading: "SK Broadband 콘텐츠 관리 솔루션 NCDS 개발 및 유지보수",
              company: null,
              twoBlocks: [],
              projects: [
                {
                  title: "업무 범위",
                  items: [
                    "콘텐츠 파일 처리 기능 개발 및 유지보수: 파일 검사, 전처리, 검수 워크플로우",
                    "Gradle 도입 및 모노레포 적용으로 빌드/프로젝트 구성을 개선했습니다.",
                    "ClamAV 바이러스 검사 솔루션을 연동했습니다."
                  ],
                  note: ""
                },
                {
                  title: "핵심 이슈 해결: CIFS 마운트 병목 개선",
                  items: [
                    "대용량 미디어 파일 처리 시 CIFS 스토리지 접근 구간에서 지연이 지속 발생했습니다.",
                    "기존 구성이 공인망(1Gbps) 경로를 경유하고 있었고, 병목이 애플리케이션 로직이 아닌 네트워크 경로에 있다고 판단했습니다.",
                    "고객사와 협의하여 private IP를 확보하고 마운트를 사설망(10Gbps) 경로로 전환했습니다.",
                    "파일 처리 성능이 약 <span class=\"metric\">2~3배 개선</span>되었고, 납기 리스크가 완화되었습니다."
                  ],
                  note: "코드 최적화 이전에 인프라 병목을 먼저 제거하는 접근으로 팀 내 재발 방지에 기여했습니다."
                }
              ]
            },
            {
              type: "careerSection",
              heading: "",
              subheading: "",
              company: {
                name: "HTBeyond",
                period: "2022.09 ~ 2024.08",
                description: "아파트 통합 주거 솔루션(B2C 입주민 앱 + B2B 관리사무소 운영툴)을 개발했습니다. 클라우드 API 서버(MID)와 현장 기기 연동 서버(RED)를 모두 개발·운영하며 외부 시스템 연동 및 실시간 장애 대응·성능 개선을 수행했습니다."
              },
              twoBlocks: [
                {
                  title: "담당 역할",
                  titleClass: "block-title",
                  items: [
                    "클라우드 WAS(MID) 개발/유지보수: 웹/앱 API, 외부 시스템 연동",
                    "현장 기기 통신 WAS(RED) 개발/유지보수: 스피드게이트, 키오스크, 골프 타석기 등 실물 장비 통신",
                    "실시간 장애 대응 및 핫픽스, APM 기반 서비스 모니터링 및 성능 개선"
                  ]
                },
                {
                  title: "대표 성과",
                  titleClass: "block-title",
                  items: [
                    "엘리베이터 콜 시스템 스레드 누수 안정화: 최대 2,000개 이상에서 약 200개 수준으로 감소",
                    "복수 CRT 감시반 프로토콜 연동 수행",
                    "홈넷(코콤) API 연동 아키텍처 설계 및 구현",
                    "전기차 충전 도메인 API 설계/구현 및 현장↔서버 통신 구성"
                  ]
                }
              ],
              projects: []
            }
          ]
        },
        {
          mark: "정시원 경력기술서 3 / 3",
          footer: "정시원 · Career Description",
          blocks: [
            {
              type: "careerSection",
              heading: "Work Experience",
              subheading: "엘리베이터 콜 연동 시스템(MID) 개발 및 운영 안정화",
              company: null,
              twoBlocks: [],
              projects: [
                {
                  title: "업무 범위",
                  items: [
                    "CRT 감시반과의 TCP/IP 통신 기반 엘리베이터 호출 기능 구현 및 유지보수",
                    "복수 CRT 감시반(벤더/현장) 프로토콜 요구사항 분석 및 연동 구현",
                    "운영 중 장애 대응 및 핫픽스"
                  ],
                  note: ""
                },
                {
                  title: "핵심 성과: 스레드 누수 개선",
                  items: [
                    "운영 중 서버 스레드 수가 최대 2,000개 이상까지 증가하여 장애 리스크가 발생했습니다.",
                    "APM 및 운영 지표 기반으로 스레드 증가 패턴을 확인하고, Netty NioEventLoopGroup 구조를 최적화했습니다.",
                    "스레드 수가 약 <span class=\"metric\">200개 수준</span>으로 안정화되었고, 서버 자원 사용량 및 처리량이 개선되었습니다."
                  ],
                  note: "참고: <a href=\"https://blog.siwony.xyz/devops/2024/03/22/1%EC%B0%A8-%EA%B0%9C%EC%84%A0-%EC%8A%A4%EB%9E%98%EB%93%9C%EA%B0%80-2000%EA%B0%9C-%EC%9D%B4%EC%83%81-%ED%8A%80%EB%8A%94-%ED%98%84%EC%83%81/\">1차 개선</a>, <a href=\"https://blog.siwony.xyz/devops/2024/07/06/2%EC%B0%A8-%EA%B0%9C%EC%84%A0-%EC%95%84%EB%AC%B4%EB%A6%AC-%EA%B7%B8%EB%9E%98%EB%8F%84-%EC%8A%A4%EB%9E%98%EB%93%9C-700%EA%B0%9C%EB%8A%94-%EB%A7%8E%EC%9D%80%EA%B1%B0-%EC%95%84%EB%8B%8C%EA%B0%80/\">2차 개선</a>"
                }
              ]
            },
            {
              type: "careerSection",
              heading: "",
              subheading: "홈넷 연동 아키텍처 설계 및 구현(MID)",
              company: null,
              twoBlocks: [],
              projects: [
                {
                  title: "업무 범위",
                  items: [
                    "홈넷사(코콤 등) API 연동 및 통합 아키텍처 설계·구현",
                    "홈넷사별 상이한 API를 앱에서 일관되게 사용할 수 있도록 공통 인터페이스를 추상화했습니다.",
                    "Kafka 기반 홈넷 기기 상태 및 편의 서비스 알림 데이터를 서빙했습니다."
                  ],
                  note: ""
                },
                {
                  title: "성과 포인트",
                  items: [
                    "벤더별 API를 내부 표준 형태로 매핑하여 제품 기능으로 통합했습니다.",
                    "외부 의존성(홈넷사 API 변경/제약)에 대응 가능한 구조로 설계했습니다."
                  ],
                  note: ""
                }
              ]
            },
            {
              type: "careerSection",
              heading: "",
              subheading: "전기차 충전(MID) 및 사우나 키오스크(RED) 개발",
              company: null,
              twoBlocks: [
                {
                  title: "전기차 충전 - MID",
                  titleClass: "project-title",
                  items: [
                    "관리사무소 운영툴 API를 개발했습니다.",
                    "입주민 앱 API를 설계/개발했습니다: 충전기 현황 API, 충전 현황 푸시 알림 기능.",
                    "아파트 현장 서버↔충전기 서버 간 통신을 구성하고, 충전기 상태 수집 및 이력 적재 API를 설계/개발했습니다.",
                    "B2B 운영툴과 B2C 앱을 동시에 지원하는 백엔드를 설계하며, 현장/서버/앱 3자 구조에서 데이터 정합성을 고려했습니다."
                  ]
                },
                {
                  title: "사우나 키오스크 - RED",
                  titleClass: "project-title",
                  items: [
                    "키오스크 모니터링 기능을 개발했습니다: 운영 상태 확인, 장애 감지.",
                    "디지털 락커/신발장 발권 시스템을 개발했습니다.",
                    "클라우드 서버로 발권 이력 및 기기 데이터 전송 기능을 개발했습니다."
                  ]
                }
              ],
              projects: []
            }
          ]
        }
      ]
    }
  }
};

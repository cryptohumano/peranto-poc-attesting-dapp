/* eslint-disable import/no-extraneous-dependencies */
import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { initializeApp, getApps } from 'firebase/app';

import { getFirestore, doc, setDoc } from 'firebase/firestore';

import { logger } from '../../utilities/logger';

const firebaseConfig = {
  apiKey: 'AIzaSyAAwR5GvEUi3lLWy9bb1tz65jhvHI3vufc',
  authDomain: 'peranto-test.firebaseapp.com',
  projectId: 'peranto-test',
  storageBucket: 'peranto-test.appspot.com',
  messagingSenderId: '777447831295',
  appId: '1:777447831295:web:6a987d7c8b307ecef43eca',
};

const apps = getApps();

export const firebase =
  apps.length > 0 ? apps[0] : initializeApp(firebaseConfig);

export const firestore = getFirestore(firebase);

// WH SECRET oEI07pv3tHbQ1069H61r35C0K
async function handler(req: Request, res: Response): Promise<void> {
  try {
    const { eventName } = req.body;

    const docRef = await setDoc(
      doc(firestore, 'metamap', 'testId_' + eventName),
      {
        payload: JSON.stringify({
          computed: {
            age: {
              data: 30,
            },
          },
          documents: [
            {
              country: 'MX',
              merchantFields: [],
              region: null,
              type: 'national-id',
              subtype: 'credencial-para-votar',
              steps: [
                {
                  status: 200,
                  id: 'age-check',
                  cacheHit: null,
                  data: {
                    age: 30,
                    ageThreshold: 18,
                    underage: false,
                  },
                  error: null,
                },
                {
                  status: 200,
                  id: 'alteration-detection',
                  cacheHit: null,
                  error: null,
                },
                {
                  status: 200,
                  id: 'facematch',
                  cacheHit: null,
                  data: {
                    score: 100,
                  },
                  error: null,
                },
                {
                  status: 200,
                  id: 'template-matching',
                  cacheHit: null,
                  error: null,
                },
                {
                  status: 200,
                  id: 'document-reading',
                  cacheHit: null,
                  data: {
                    fullName: {
                      value: 'EDGAR DANIEL SALINAS LEDESMA',
                      required: true,
                      label: 'Name',
                    },
                    address: {
                      value:
                        'AV MARINA NACIONAL 200 EDIF 1 A 74 U HAB MARINA NACIONAL 11320 MIGUEL HIDALGO, CDMX.',
                      required: false,
                      label: 'Address',
                    },
                    emissionDate: {
                      value: '2017-01-01',
                      required: false,
                      label: 'Emission Date',
                      format: 'date',
                    },
                    documentNumber: {
                      value: '163631998',
                      required: true,
                      label: 'Document Number',
                    },
                    dateOfBirth: {
                      value: '1992-07-18',
                      required: true,
                      label: 'Day of Birth',
                      format: 'date',
                    },
                    expirationDate: {
                      value: '2027-12-31',
                      required: false,
                      label: 'Date of Expiration',
                      format: 'date',
                    },
                    documentType: {
                      value: 'ID',
                      required: false,
                      label: 'Document Type',
                    },
                    firstName: {
                      value: 'EDGAR DANIEL',
                      required: false,
                      label: 'First Name',
                    },
                    issueCountry: {
                      value: 'MEX',
                      required: false,
                      label: 'Issue Country',
                    },
                    nationality: {
                      value: 'MEX',
                      required: false,
                      label: 'Nationality',
                    },
                    sex: {
                      value: 'M',
                      required: false,
                      label: 'Sex',
                    },
                    surname: {
                      value: 'SALINAS LEDESMA',
                      required: false,
                      label: 'Surname',
                    },
                    cde: {
                      value: 'SLLDED92071809H000',
                      required: false,
                      label: 'Elector Key',
                    },
                    curp: {
                      value: 'SALE920718HDFLDD08',
                      required: false,
                      label: 'CURP',
                    },
                    ne: {
                      value: '01',
                      required: false,
                      label: 'Emission Number',
                    },
                    ocrNumber: {
                      value: '5182086432677',
                      required: false,
                      label: 'OCR Number',
                    },
                  },
                  error: null,
                },
              ],
              fields: {
                address: {
                  value:
                    'AV MARINA NACIONAL 200 EDIF 1 A 74 U HAB MARINA NACIONAL 11320 MIGUEL HIDALGO, CDMX.',
                },
                cde: {
                  value: 'SLLDED92071809H000',
                },
                curp: {
                  value: 'SALE920718HDFLDD08',
                },
                dateOfBirth: {
                  value: '1992-07-18',
                },
                documentNumber: {
                  value: '163631998',
                },
                documentType: {
                  value: 'ID',
                },
                emissionDate: {
                  value: '2017-01-01',
                },
                expirationDate: {
                  value: '2027-12-31',
                },
                firstName: {
                  value: 'EDGAR DANIEL',
                },
                fullName: {
                  value: 'EDGAR DANIEL SALINAS LEDESMA',
                },
                issueCountry: {
                  value: 'MEX',
                },
                nationality: {
                  value: 'MEX',
                },
                ne: {
                  value: '01',
                },
                ocrNumber: {
                  value: '5182086432677',
                },
                sex: {
                  value: 'M',
                },
                surname: {
                  value: 'SALINAS LEDESMA',
                },
              },
              photos: [
                'https://media.getmati.com/file?location=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlTmFtZSI6ImQwNmM2YWI0LTM2YmYtNDdkOC04NzE3LWQ0Y2NlNDRmNDU5ZC5qcGVnIiwiZm9sZGVyIjoiZG9jdW1lbnQiLCJpYXQiOjE2ODgzNDAyMTMsImV4cCI6MTY4ODQyNjYxMywiYXVkIjoiZWFjMTYwZmYtYTBlNS00M2QxLWFkNTktNTIwMjI1YmQ3OWI4In0.2mkLDqtZfGz8XcraYd1PoZnoYkkwUrPxXCvmYehQHxY',
                'https://media.getmati.com/file?location=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlTmFtZSI6ImNlYzdlNjE4LTVkMmMtNDcxNi05MWM4LWUxYTAyM2RiMWNiNC5qcGVnIiwiZm9sZGVyIjoiZG9jdW1lbnQiLCJpYXQiOjE2ODgzNDAyMTMsImV4cCI6MTY4ODQyNjYxMywiYXVkIjoiZWFjMTYwZmYtYTBlNS00M2QxLWFkNTktNTIwMjI1YmQ3OWI4In0.aXVYcsK0D6VqfIeiTsRqZd2R_53G-sk7SD-SxB5Oq3g',
              ],
            },
          ],
          expired: false,
          flow: {
            id: '64811ce44d683b001b9013ef',
            name: 'Default flow',
          },
          identity: {
            id: '64a0f46f43bd9d001b7a2778',
            status: 'verified',
          },
          steps: [
            {
              status: 200,
              id: 'liveness',
              cacheHit: null,
              data: {
                videoUrl:
                  'https://media.getmati.com/file?location=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlTmFtZSI6Ijk2YTA0NTBlLWQzZGUtNGNjYS05MGFkLTQ5NGZiMjc4MGUwNy5ta3YiLCJmb2xkZXIiOiJ2aWRlbyIsImlhdCI6MTY4ODM0MDIxMywiZXhwIjoxNjg4NDI2NjEzLCJhdWQiOiJlYWMxNjBmZi1hMGU1LTQzZDEtYWQ1OS01MjAyMjViZDc5YjgifQ.TEQNks36DielBu29ThmFnColNqFYYwMWeehoaY-mTVk',
                spriteUrl:
                  'https://media.getmati.com/file?location=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlTmFtZSI6IjEzOWMxNjhkLWY1MTUtNGEwNS04NWFjLTQ4ZjRjYmQ1MDI5Mi5qcGVnIiwiZm9sZGVyIjoic2VsZmllIiwiaWF0IjoxNjg4MzQwMjEzLCJleHAiOjE2ODg0MjY2MTMsImF1ZCI6ImVhYzE2MGZmLWEwZTUtNDNkMS1hZDU5LTUyMDIyNWJkNzliOCJ9.1qEptKVwj9lUI3P9trJXWy7HRpIA_nBpbXrlNwNPnoY',
                selfieUrl:
                  'https://media.getmati.com/file?location=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlTmFtZSI6IjM5YWYwYzAzLTVlZWYtNDM5ZC1iZDNkLWI0N2RkZDlhYjg0MC5qcGVnIiwiZm9sZGVyIjoic2VsZmllIiwiaWF0IjoxNjg4MzQwMjEzLCJleHAiOjE2ODg0MjY2MTMsImF1ZCI6ImVhYzE2MGZmLWEwZTUtNDNkMS1hZDU5LTUyMDIyNWJkNzliOCJ9.wjiXYcGF13To2E4IqZL5u0MKLhkBwNdGhxy9VEzylD8',
              },
              error: null,
            },
          ],
          masJobToBePostpone: false,
          profileId: 'MX|NATIONAL-ID|163631998',
          id: '64a0f46f43bd9d001b7a277a',
          deviceFingerprint: {
            ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
            browser: {
              name: 'Chrome',
              version: '114.0.0.0',
              major: '114',
            },
            engine: {
              name: 'Blink',
              version: '114.0.0.0',
            },
            os: {
              name: 'Mac OS',
              version: '10.15.7',
            },
            app: {
              platform: 'web_desktop',
              version: '22.3.5',
            },
            ip: '187.191.38.141',
            vpnDetectionEnabled: false,
          },
          hasProblem: false,
        }),
      },
    );

    res.json({
      docRef,
    });
  } catch (error) {
    logger.error(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
}

export const metamap = Router();

metamap.post('/api/metamap', handler);

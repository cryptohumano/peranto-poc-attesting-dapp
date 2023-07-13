'use client';

import React from 'react';
import { useEffect } from 'react';
import { Inter } from 'next/font/google';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Link from 'next/link';

import { firestore } from '@/common/utilities/firebase';
import {
  supportedCTypeKeys,
  supportedCTypes,
} from '@/common/utilities/supportedCTypes';

import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

import perantoLogo from './peranto_logo.svg';
import chrome from './chrome-web-store.png';
import firefox from './firefox-web-store.png';

export function Hero() {
  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column', md: 'row' }}
      wrap="nowrap"
      minH="70vh"
      px={8}
      mb={16}
    >
      <Stack
        spacing={8}
        w={{ base: '80%', md: '50%' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
        pr={14}
      >
        <img className="mb-8" src={perantoLogo.src} width={300} />
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Con peranto administra y utiliza tu identidad de la forma más óptima y
          eficiente.
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          La plataforma que usarás a continuación{' '}
          <span className="font-bold">NO</span> guarda tus datos personales,
          pero confía en que <span className="font-bold">TÚ SÍ</span> sabes
          guardar tus datos.
        </Heading>
        <Heading
          color="primary.800"
          opacity="0.8"
          size="md"
          as="h2"
          fontWeight="normal"
          lineHeight={1.5}
        >
          Nos valemos de servicios de verificación de identidad de partners, por
          lo que los datos que provees para validación son rastreados para que
          puedas hacer uso de tus derechos{' '}
          <span className="font-bold">ARCO</span>.
        </Heading>
      </Stack>
      <Flex
        direction="column"
        w={{ base: '80%', sm: '60%', md: '40%' }}
        mb={{ base: 12, md: 0 }}
        gap={2}
      >
        <div className="flex justify-center w-full">
          <div className="animation-example">
            <div className="item">
              <div className="line"></div>
              <div className="dot"></div>
              <div className="circle"></div>
            </div>
            <div className="item">
              <div className="line"></div>
              <div className="dot"></div>
              <div className="circle"></div>
            </div>
            <div className="item">
              <div className="line"></div>
              <div className="dot"></div>
              <div className="circle"></div>
            </div>
            <div className="item">
              <div className="line"></div>
              <div className="dot"></div>
              <div className="circle"></div>
            </div>
            <div className="item -type2">
              <div className="line"></div>
              <div className="dot"></div>
              <div className="circle"></div>
            </div>
            <div className="item -type2">
              <div className="line"></div>
              <div className="dot"></div>
              <div className="circle"></div>
            </div>
            <div className="item -type2">
              <div className="line"></div>
              <div className="dot"></div>
              <div className="circle"></div>
            </div>
            <div className="item -type2">
              <div className="line"></div>
              <div className="dot"></div>
              <div className="circle"></div>
            </div>
            <div className="center">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
        {/* TODO: Make this change every X secs */}
        {/* <Image
          src="https://source.unsplash.com/collection/404339/800x600"
          size="100%"
          rounded="1rem"
          shadow="2xl"
        /> */}
        <h2 className="font-bold text-lg mt-12 mb-4">
          Descargar Sporran y <br /> reclamar mi identidad
        </h2>
        <div className="flex flex-col gap-4">
          <a href="https://chrome.google.com/webstore/detail/sporran/djdnajgjcbjhhbdblkegbcgodlkkfhcl">
            <img src={chrome.src} className="w-52" />
          </a>
          <a href="https://addons.mozilla.org/es/firefox/addon/sporran/">
            <img src={firefox.src} className="w-52" />
          </a>
        </div>
      </Flex>
    </Flex>
  );
}

export default function Home() {
  useEffect(() => {
    const callAsync = async () => {
      const q = query(
        collection(firestore, 'truora'),
        where('account_id', '==', account_id),
        where('identity_process_id', '==', process_id),
      );

      const querySnapshot = await getDocs(q);
      let result: any = {};

      querySnapshot.forEach((doc) => {
        result = { ...doc.data(), id: doc.id };
      });

      localStorage.setItem(`truoraFlow_${result.type}`, JSON.stringify(result));

      if (result.type === 'document-validation') location.replace('/claim/ine');
    };

    const params = new URLSearchParams(window.location.search);
    const process_id = params.get('process_id');
    const account_id = params.get('account_id');

    if (process_id && account_id) callAsync();
  }, []);

  if (true)
    return (
      <>
        <Hero />
      </>
    );

  return (
    <section className="bg-base-200">
      <div className="hero min-h-screen container mx-auto max-w-5xl">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex flex-col text-center lg:text-left">
            <h1 className="text-5xl font-bold text-[#1b2a51]">Attest App</h1>
            <p className="py-6 text-[#1b2a51]">
              This KILT Attester Example demonstrates how to issue credentials
              for a couple basic claim types which already exist on the KILT
              blockchain. The user chooses a claim type, enters the claim data,
              makes a (mock) payment, and the claim is sent to the attester to
              be reviewed.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <p className="text-[#1b2a51]">Start selecting a claim type:</p>

              <ul className="menu w-56 rounded-box">
                {supportedCTypeKeys.map((type, k) => (
                  <li key={type}>
                    <Link
                      className="link text-[#1b2a51]"
                      href={`/claim/${type}`}
                    >
                      {k === 0 && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      )}
                      {k === 1 && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                      {k === 2 && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      )}
                      {supportedCTypes[type].title === 'Authorization'
                        ? 'INE'
                        : supportedCTypes[type].title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

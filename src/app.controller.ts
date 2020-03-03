import { Controller, Get } from '@nestjs/common';
import uuid from 'uuid/v4';
import { colors } from '@material-ui/core';

import { AppService } from './app.service';
const moment = require('moment');
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.getHello();
  }

  @Get('/api/account/profile')
  getTestFor1234edfrgcvbhnjmkloiuyytrredghvdfs(): any {
    return {
      profile: {
        avatar: '/images/avatars/avatar_11.png',
        canHire: false,
        country: 'USA',
        email: 'shen.zhi@devias.io',
        firstName: 'Shen',
        isPublic: true,
        lastName: 'Zhi',
        phone: '+40 777666555',
        state: 'Alabama',
        timezone: '4:32PM (GMT-4)',
      },
    };
  }

  @Get('/api/account/statistics')
  getTestFor1234edfrgcvbhnjmkloiuysytrredghvdfs(): any {
    return {
      statistics: {
        payout: '4,250',
        projects: '12,500',
        visitors: '230',
        watching: '5',
      },
    };
  }

  @Get('/api/account/projects')
  getTestFor1234edfrgcvbhnjmkloiuyscytrredghvdfs(): any {
    return {
      projects: [
        {
          id: 'ZXxxxxx',
          title: 'Mella Full Screen Slider',
          price: '3K - 6K',
          currency: '$',
          type: 'Full-Time',
          location: 'Europe',
          author: {
            name: 'Anje Keizer',
            avatar: '/images/avatars/avatar_5.png',
          },
          tags: [
            {
              id: 'ZXxxxxxx',
              text: 'Vue JS',
              color: colors.green[600],
            },
          ],
          updated_at: moment().subtract(24, 'minutes'),
        },
      ],
    };
  }

  @Get('/api/account/todos')
  getTestFor1234edfrgcvbhnjmkloiuyscxytrredghvdfs1(): any {
    return {
      todos: [
        {
          id: 'ZXxxxxxxx',
          title: 'Finish the proposal design and contract for the client ASAP',
          deadline: moment().subtract(2, 'days'),
          done: false,
        },
        {
          id: 'ZXxxxxxxxx',
          title: 'Finish the proposal design and contract for the client ASAP',
          deadline: moment(),
          done: false,
        },
        {
          id: 'ZXxxxxxxxxx',
          title:
            'Upload the files for the client @Adrian Stefan with the fonts, assets exported and all the fancy svgs',
          deadline: moment().add(2, 'days'),
          done: false,
        },
        {
          id: 'ZXxxxxxxxxxx',
          title: 'Re-write the card component with hooks and context',
          deadline: moment().add(5, 'days'),
          done: false,
        },
        {
          id: 'ZXxxxxxxxxxxa',
          title: 'Send proposal for the fintech project',
          deadline: moment().add(5, 'days'),
          done: false,
        },
        {
          id: 'ZXxxxxxxxxxxaa',
          title:
            'Create todo app with react hooks just to get a better understanding of the concept',
          deadline: moment().add(7, 'days'),
          done: true,
        },
      ],
    };
  }

  @Get('/api/account/notifications')
  getTestFor1234edfrgcvbhnjmkloiuyscxcytrredghvdfs12(): any {
    return {
      notifications: [
        {
          id: 'ZXxxxxxxxxxxaaa',
          title: 'New order has been received',
          type: 'order',
          created_at: moment().subtract(2, 'hours'),
        },
        {
          id: 'ZXxxxxxxxxxxaaaa',
          title: 'New customer is registered',
          type: 'user',
          created_at: moment().subtract(1, 'day'),
        },
        {
          id: 'ZXxxxxxxxxxxaaaaa',
          title: 'Project has been approved',
          type: 'project',
          created_at: moment().subtract(3, 'days'),
        },
        {
          id: 'ZXxxxxxxxxxxaaaaaa',
          title: 'New feature has been added',
          type: 'feature',
          created_at: moment().subtract(7, 'days'),
        },
      ],
    };
  }

  @Get('/api/account/subscription')
  getTestFor123(): any {
    return {
      subscription: {
        name: 'Freelancer',
        price: '5',
        currency: '$',
        proposalsLeft: 12,
        templatesLeft: 5,
        invitesLeft: 24,
        adsLeft: 10,
        hasAnalytics: true,
        hasEmailAlerts: true,
      },
    };
  }

  @Get('/api/account/settings')
  getTestFor1234(): any {
    return {
      settings: {},
    };
  }

  @Get('/api/calendar')
  getTestFor1234e(): any {
    return {
      draft: [],
      events: [
        {
          id: 'ZXxxxxxxxxxxaaaaaaa',
          title: 'Call Samantha',
          desc: 'Inform about new contract',
          color: colors.green['700'],
          start: moment('2019-07-01 16:55:00'),
          end: moment('2019-07-01 17:02:00'),
        },
        {
          id: 'ZXxxxxxxxxxxaaaaaaaa',
          title: 'Meet with IBM',
          desc: 'Discuss about new partnership',
          start: moment('2019-07-03 08:55:00'),
          end: moment('2019-07-04 15:02:00'),
        },
        {
          id: 'ZXxxxxxxxxxxaaaaaaaaa',
          title: 'SCRUM Planning',
          desc: 'Prepare documentation',
          allDay: true,
          start: moment('2019-07-14 16:55:00'),
        },
        {
          id: 'ZXxxxxxxxxxxaaaaaaaaaa',
          title: 'Beign SEM',
          desc: 'Meet with team to discuss',
          allDay: true,
          start: moment('2019-07-18 07:00:00'),
        },
        {
          id: 'ZXxxxxxxxxxxaaaaaaaaaaa',
          title: 'Fire John',
          desc: 'Sorry, John',
          color: colors.green['700'],
          start: moment('2019-07-20 08:55:00'),
          end: moment('2019-07-20 09:30:00'),
        },
        {
          id: 'ZXxxxxxxxxxxaaaaaaaaaaaa',
          title: 'Call Alex',
          desc: 'Discuss about the new project',
          allDay: true,
          start: moment('2019-07-30 08:00:00'),
        },
        {
          id: 'ZXxxxxxxxxxxaaaaaaaaaaaaa',
          title: 'Visit Samantha',
          color: colors.green['700'],
          desc: 'Get a new quote for the payment processor',
          start: moment('2019-07-30 08:00:00'),
          end: moment('2019-07-30 09:00:00'),
        },
      ],
    };
  }

  @Get('/api/chat/conversations')
  getTestFor1234ed(): any {
    return {
      conversations: [
        {
          id: 'ZXxxxxxxxxxxaaaaaaaaaaaaaa',
          otherUser: {
            name: 'Adam Denisov',
            avatar: '/images/avatars/avatar_7.png',
            active: true,
            lastActivity: moment(),
          },
          messages: [
            {
              id: '334',
              sender: {
                authUser: false,
                name: 'Adam Denisov',
                avatar: '/images/avatars/avatar_7.png',
                lastActivity: moment(),
              },
              content:
                "Hey, nice projects! I really liked the one in react. What's your quote on kinda similar project?",
              contentType: 'text',
              created_at: moment().subtract(10, 'hours'),
            },
            {
              id: '33453453',
              sender: {
                authUser: true,
                name: 'Shen Zhi',
                avatar: '/images/avatars/avatar_11.png',
              },
              content:
                'I would need to know more details, but my hourly rate stats at $35/hour. Thanks!',
              contentType: 'text',
              created_at: moment().subtract(2, 'hours'),
            },
            {
              id: '3345345345',
              sender: {
                authUser: false,
                name: 'Adam Denisov',
                avatar: '/images/avatars/avatar_7.png',
              },
              content:
                "Well it's a really easy one, I'm sure we can make it half of the price.",
              contentType: 'text',
              created_at: moment().subtract(5, 'minutes'),
            },
            {
              id: '3345345345345',
              sender: {
                authUser: true,
                name: 'Shen Zhi',
                avatar: '/images/avatars/avatar_11.png',
              },
              content:
                "Then why don't you make it if it's that easy? Sorry I'm not interetes, have fantastic day Adam!",
              contentType: 'text',
              created_at: moment().subtract(3, 'minutes'),
            },
            {
              id: '33453453453453',
              sender: {
                authUser: false,
                name: 'Adam Denisov',
                avatar: '/images/avatars/avatar_7.png',
              },
              content: 'Last offer, $25 per hour',
              contentType: 'text',
              created_at: moment().subtract(1, 'minute'),
            },
            {
              id: '3345345345345353',
              sender: {
                authUser: false,
                name: 'Adam Denisov',
                avatar: '/images/avatars/avatar_7.png',
              },
              content: '/images/projects/project_1.jpg',
              contentType: 'image',
              created_at: moment().subtract(1, 'minute'),
            },
          ],
          unread: 0,
          created_at: moment().subtract(1, 'minute'),
        },
        {
          id: '3345345345345353453',
          otherUser: {
            name: 'Ekaterina Tankova',
            avatar: '/images/avatars/avatar_2.png',
            active: true,
            lastActivity: moment(),
          },
          messages: [
            {
              id: '334534534534535345345',
              sender: {
                authUser: true,
                name: 'Shen Zhi',
                avatar: '/images/avatars/avatar_11.png',
              },
              content: 'Hey, would you like to collaborate?',
              contentType: 'text',
              created_at: moment().subtract(6, 'minutes'),
            },
            {
              id: '3345345345345353453453',
              sender: {
                authUser: false,
                name: 'Ekaterina Tankova',
                avatar: '/images/avatars/avatar_2.png',
              },
              content: "I don't think that's ideal",
              contentType: 'text',
              created_at: moment().subtract(5, 'minutes'),
            },
          ],
          unread: 3,
          created_at: moment().subtract(26, 'minutes'),
        },
        {
          id: '3345345345345353453453',
          otherUser: {
            name: 'Emilee Simchenko',
            avatar: '/images/avatars/avatar_9.png',
            active: false,
            lastActivity: moment().subtract(2, 'minutes'),
          },
          messages: [
            {
              id: '3345345345345353453453453',
              sender: {
                authUser: false,
                name: 'Emilee Simchenko',
                avatar: '/images/avatars/avatar_9.png',
              },
              content: 'Hi Shen, we should submit the product today',
              contentType: 'text',
              created_at: moment().subtract(2, 'hours'),
            },
            {
              id: '33453453453453534534534535',
              sender: {
                authUser: true,
                name: 'Shen Zhi',
                avatar: '/images/avatars/avatar_11.png',
              },
              content: 'Oh, totally forgot about it',
              contentType: 'text',
              created_at: moment()
                .subtract(1, 'hour')
                .subtract(2, 'minutes'),
            },
            {
              id: '3345345345345353453453453534',
              sender: {
                authUser: true,
                name: 'Shen Zhi',
                avatar: '/images/avatars/avatar_11.png',
              },
              content: 'Alright then',
              contentType: 'text',
              created_at: moment().subtract(1, 'hour'),
            },
          ],
          unread: 0,
          created_at: moment().subtract(3, 'hours'),
        },
        {
          id: '334534534534535345345345353453',
          otherUser: {
            name: 'Kwak Seong-Min',
            avatar: '/images/avatars/avatar_10.png',
            active: true,
            lastActivity: moment(),
          },
          messages: [
            {
              id: '33453453453453534534534535345345',
              sender: {
                authUser: true,
                name: 'Shen Zhi',
                avatar: '/images/avatars/avatar_11.png',
              },
              content:
                "Hi Kwak! I've seen your projects and we can work together on a project. Will send you the details later.",
              contentType: 'text',
              created_at: moment().subtract(3, 'days'),
            },
            {
              id: '334534534534535345345345353453455',
              sender: {
                authUser: false,
                name: 'Kwak Seong-Min',
                avatar: '/images/avatars/avatar_10.png',
              },
              content: "Haha, right, we'll do it",
              contentType: 'text',
              created_at: moment().subtract(2, 'days'),
            },
          ],
          unread: 1,
          created_at: moment().subtract(2, 'days'),
        },
        {
          id: '33453453453453534534534535345345555',
          otherUser: {
            name: 'Cao Yu',
            avatar: '/images/avatars/avatar_3.png',
            active: false,
            lastActivity: moment().subtract(4, 'hours'),
          },
          messages: [
            {
              id: '334534534534535345345345353453455555',
              sender: {
                authUser: true,
                name: 'Shen Zhi',
                avatar: '/images/avatars/avatar_11.png',
              },
              content: 'Did you receive my email about the brief?',
              contentType: 'text',
              created_at: moment().subtract(3, 'days'),
            },
            {
              id: '3345345345345353453453453534534555555',
              sender: {
                authUser: false,
                name: 'Cao Yu',
                avatar: '/images/avatars/avatar_3.png',
              },
              content: "I'm not sure, but I will check it later",
              contentType: 'text',
              created_at: moment().subtract(2, 'days'),
            },
          ],
          unread: 0,
          created_at: moment().subtract(5, 'days'),
        },
        {
          id: '33453453453453534534534535345345555555',
          otherUser: {
            name: 'Clarke Gillebert',
            avatar: '/images/avatars/avatar_6.png',
            active: true,
            lastActivity: moment(),
          },
          messages: [
            {
              id: '334534534534535345345345353453455555555',
              sender: {
                authUser: false,
                name: 'Clarke Gillebert',
                avatar: '/images/avatars/avatar_6.png',
              },
              content: 'Hey Shen! I love your projects!!!',
              contentType: 'text',
              created_at: moment().subtract(2, 'days'),
            },
            {
              id: '3345345345345353453453453534534555555555',
              sender: {
                authUser: true,
                name: 'Shen Zhi',
                avatar: '/images/avatars/avatar_11.png',
              },
              content: "Haha thank you Clarke, I'm doing our best",
              contentType: 'text',
              created_at: moment().subtract(3, 'days'),
            },
          ],
          unread: 0,
          created_at: moment().subtract(5, 'days'),
        },
      ],
    };
  }

  @Get('/api/chat/activity')
  getTestFor1234edf(): any {
    return {
      groups: [
        {
          id: 'clients',
          name: 'Clients',
        },
        {
          id: 'friends',
          name: 'Friends',
        },
      ],
      connections: [
        {
          id: '33453453453453534534534535345345555555555',
          name: 'Ekaterina Tankova',
          avatar: '/images/avatars/avatar_2.png',
          active: false,
          lastActivity: moment().subtract(24, 'minutes'),
          group: 'clients',
        },
        {
          id: '334534534534535345345345353453455555555555',
          name: 'Cao Yu',
          avatar: '/images/avatars/avatar_3.png',
          active: true,
          lastActivity: moment(),
          group: 'clients',
        },
        {
          id: '3345345345345353453453453534534555555555555',
          name: 'Anje Keizer',
          avatar: '/images/avatars/avatar_5.png',
          active: false,
          lastActivity: moment().subtract(1, 'minutes'),
          group: 'clients',
        },
        {
          id: '33453453453453534534534535345345555555555555',
          name: 'Ava Gregoraci',
          avatar: '/images/avatars/avatar_8.png',
          active: true,
          lastActivity: moment(),
          group: 'clients',
        },
        {
          id: '334534534534535345345345353453455555555555555',
          name: 'Clarke Gillebert',
          avatar: '/images/avatars/avatar_6.png',
          active: true,
          lastActivity: moment(),
          group: 'friends',
        },
        {
          id: '3345345345345353453453453534534555555555555555',
          name: 'Adam Denisov',
          avatar: '/images/avatars/avatar_7.png',
          active: false,
          lastActivity: moment().subtract(24, 'minutes'),
          group: 'friends',
        },
        {
          id: '33453453453453534534534535345345555555555555555',
          name: 'Emilee Simchenko',
          avatar: '/images/avatars/avatar_9.png',
          active: true,
          lastActivity: moment(),
          group: 'friends',
        },
        {
          id: '334534534534535345345345353453455555555555555555',
          name: 'Kwak Seong-Min',
          avatar: '/images/avatars/avatar_10.png',
          active: true,
          lastActivity: moment(),
          group: 'friends',
        },
        {
          id: '3345345345345353453453453534534555555555555555555',
          name: 'Shen Zhi',
          avatar: '/images/avatars/avatar_11.png',
          active: true,
          lastActivity: moment(),
          group: 'friends',
        },
        {
          id: '33453453453453534534534535345345555555555555555555',
          name: 'Merrile Burgett',
          avatar: '/images/avatars/avatar_12.png',
          active: false,
          lastActivity: moment().subtract(2, 'days'),
        },
      ],
    };
  }

  @Get('/api/management/customers')
  getTestFor1234edfr(): any {
    return {
      customers: [
        {
          id: '33453453453453534534534535345345555555555555555555d',
          name: 'Ekaterina Tankova',
          email: 'ekaterina.tankova@devias.io',
          avatar: '/images/avatars/avatar_2.png',
          spent: '500.00',
          currency: '$',
          type: 'Agency',
          projects: '1',
          rating: 5,
          location: 'West Virginia, USA',
        },
        {
          id: '33453453453453534534534535345345555555555555555555dd',
          name: 'Cao Yu',
          email: 'cao.yu@devias.io',
          avatar: '/images/avatars/avatar_3.png',
          spent: '300.00',
          type: 'Freelancer',
          currency: '$',
          projects: '3',
          rating: 4.3,
          location: 'Bristow',
        },
        {
          id: '33453453453453534534534535345345555555555555555555ddd',
          name: 'Alexa Richardson',
          email: 'alexa.richardson@devias.io',
          avatar: '/images/avatars/avatar_4.png',
          spent: '2,600.00',
          type: 'Enterprise',
          currency: '$',
          projects: '0',
          rating: 4.5,
          location: 'Georgia, USA',
        },
        {
          id: 'dd',
          name: 'Anje Keizer',
          email: 'anje.keizer@devias.io',
          avatar: '/images/avatars/avatar_5.png',
          spent: '5,600.00',
          type: 'Enterprise',
          currency: '$',
          projects: '6',
          rating: 4,
          location: 'Ohio, USA',
        },
        {
          id: 'ddd',
          name: 'Clarke Gillebert',
          email: 'clarke.gillebert@devias.io',
          avatar: '/images/avatars/avatar_6.png',
          spent: '500.00',
          type: 'Agency',
          currency: '$',
          projects: '1',
          rating: 3.5,
          location: 'Texas, USA',
        },
        {
          id: 'dddd',
          name: 'Adam Denisov',
          email: 'adam.denisov@devias.io',
          avatar: '/images/avatars/avatar_7.png',
          spent: '5,230.00',
          type: 'Agency',
          currency: '$',
          projects: '0',
          rating: 3,
          location: 'California, USA',
        },
        {
          id: 'ddddd',
          name: 'Ava Gregoraci',
          email: 'ava.gregoraci@devias.io',
          avatar: '/images/avatars/avatar_8.png',
          spent: '300.00',
          type: 'Freelancer',
          currency: '$',
          projects: '0',
          rating: 4,
          location: 'California, USA',
        },
        {
          id: 'dddddd',
          name: 'Emilee Simchenko',
          email: 'emilee.simchenko@devias.io',
          avatar: '/images/avatars/avatar_9.png',
          spent: '100.00',
          type: 'Agency',
          currency: '$',
          projects: '4',
          rating: 4.5,
          location: 'Nevada, USA',
        },
        {
          id: 'ddddddcx',
          name: 'Kwak Seong-Min',
          email: 'kwak.seong.min@devias.io',
          avatar: '/images/avatars/avatar_10.png',
          spent: '1,000.00',
          type: 'Freelancer',
          currency: '$',
          projects: '2',
          rating: 5,
          location: 'Michigan, USA',
        },
        {
          id: 'ddddddcxsa',
          name: 'Shen Zhi',
          email: 'shen.zhi@devias.io',
          avatar: '/images/avatars/avatar_11.png',
          spent: '2,300.00',
          type: 'Agency',
          currency: '$',
          projects: '0',
          rating: 3.9,
          location: 'Utah, USA',
        },
        {
          id: 'ddddddcxsaas',
          name: 'Merrile Burgett',
          email: 'merrile.burgett@devias.io',
          avatar: '/images/avatars/avatar_12.png',
          spent: '200.00',
          type: 'Enterprise',
          currency: '$',
          projects: '7',
          rating: 4.2,
          location: 'Utah, USA',
        },
      ],
    };
  }

  @Get('/api/management/customers/1/summary')
  getTestFor1234edfrg(): any {
    return {
      summary: {
        name: 'Ekaterina Tankova',
        email: 'ekaterina@devias.io',
        phone: '+55 748 327 439',
        state: 'Alabama',
        country: 'United States',
        zipCode: '240355',
        address1: 'Street John Wick, no. 7',
        address2: 'House #25',
        iban: '4142 **** **** **** ****',
        autoCC: false,
        verified: true,
        currency: '$',
        invoices: [
          {
            id: 'ddddddcxsaass',
            type: 'paid',
            value: 10.0,
          },
          {
            id: 'ddddddcxsaasss',
            type: 'paid',
            value: 15.0,
          },
          {
            id: 'ddddddcxsaassss',
            type: 'due',
            value: 5,
          },
          {
            id: 'ddddddcxsaasssss',
            type: 'income',
            value: 10.0,
          },
        ],
        vat: 19,
        balance: 0,
        emails: [
          {
            id: 'ddddddcxsaassssss',
            description: 'Order confirmation',
            created_at: moment()
              .subtract(3, 'days')
              .subtract(5, 'hours')
              .subtract(34, 'minutes'),
          },
          {
            id: 'ddddddcxsaasssssss',
            description: 'Order confirmation',
            created_at: moment()
              .subtract(4, 'days')
              .subtract(11, 'hours')
              .subtract(49, 'minutes'),
          },
        ],
      },
    };
  }

  @Get('/api/management/customers/1/invoices')
  getTestFor1234edfrgc(): any {
    return {
      invoices: [
        {
          id: 'ddddddcxsaasssssssx',
          date: moment(),
          description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
          paymentMethod: 'Credit Card',
          value: '5.25',
          currency: '$',
          status: 'paid',
        },
        {
          id: 'ddddddcxsaasssssssxs',
          date: moment(),
          description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
          paymentMethod: 'Credit Card',
          value: '5.25',
          currency: '$',
          status: 'paid',
        },
      ],
    };
  }

  @Get('/api/management/customers/1/logs')
  getTestFor1234edfrgcv(): any {
    return {
      logs: [
        {
          id: 'ddddddcxsaasssssssxss',
          status: 200,
          method: 'POST',
          route: '/api/purchase',
          desc: 'Purchase',
          IP: '84.234.243.42',
          created_at: moment()
            .subtract(2, 'days')
            .subtract(2, 'minutes')
            .subtract(56, 'seconds'),
        },
        {
          id: 'ddddddcxsaasssssssxssz',
          status: 522,
          error: 'Invalid credit card',
          method: 'POST',
          route: '/api/purchase',
          desc: 'Purchase',
          IP: '84.234.243.42',
          created_at: moment()
            .subtract(2, 'days')
            .subtract(2, 'minutes')
            .subtract(56, 'seconds'),
        },
        {
          id: 'ddddddcxsaasssssssxsszs',
          status: 200,
          method: 'DELETE',
          route: '/api/products/d65654e/remove',
          desc: 'Cart remove',
          IP: '84.234.243.42',
          created_at: moment()
            .subtract(2, 'days')
            .subtract(8, 'minutes')
            .subtract(23, 'seconds'),
        },
        {
          id: 'ddddddcxsaasssssssxsszss',
          status: 200,
          method: 'GET',
          route: '/api/products/d65654e/add',
          desc: 'Cart add',
          IP: '84.234.243.42',
          created_at: moment()
            .subtract(2, 'days')
            .subtract(20, 'minutes')
            .subtract(54, 'seconds'),
        },
        {
          id: 'ddddddcxsaasssssssxsszss',
          status: 200,
          method: 'GET',
          route: '/api/products/c85727f/add',
          desc: 'Cart add',
          IP: '84.234.243.42',
          created_at: moment()
            .subtract(2, 'days')
            .subtract(34, 'minutes')
            .subtract(16, 'seconds'),
        },
        {
          id: 'ddddddcxsaasssssssxsszsss',
          status: 200,
          method: 'GET',
          route: '/api/products/c85727f',
          desc: 'View product',
          IP: '84.234.243.42',
          created_at: moment()
            .subtract(2, 'days')
            .subtract(54, 'minutes')
            .subtract(30, 'seconds'),
        },
        {
          id: 'ddddddcxsaasssssssxsszssss',
          status: 200,
          method: 'GET',
          route: '/api/products',
          desc: 'Get products',
          IP: '84.234.243.42',
          created_at: moment()
            .subtract(2, 'days')
            .subtract(56, 'minutes')
            .subtract(40, 'seconds'),
        },
        {
          id: 'ddddddcxsaasssssssxsszsssss',
          status: 200,
          method: 'POST',
          route: '/api/login',
          desc: 'Login',
          IP: '84.234.243.42',
          created_at: moment()
            .subtract(2, 'days')
            .subtract(57, 'minutes')
            .subtract(5, 'seconds'),
        },
      ],
    };
  }

  @Get('/api/dashboard/top-referrals')
  getTestFor1234edfrgcvb(): any {
    return {
      referrals: [
        {
          id: 'ddddddcxsaasssssssxsszssssss',
          color: colors.blueGrey['700'],
          name: 'GitHub',
          initials: 'GT',
          value: '53,032',
        },
        {
          id: 'ddddddcxsaasssssssxsszssssssx',
          color: colors.cyan['500'],
          name: 'Twitter',
          initials: 'TW',
          value: '39,551',
        },
        {
          id: 'ddddddcxsaasssssssxsszssssssxd',
          color: colors.indigo[600],
          name: 'Hacker News',
          initials: 'HN',
          value: '23,150',
        },
        {
          id: 'ddddddcxsaasssssssxsszssssssxdd',
          color: colors.red['500'],
          name: 'Stack Overflow',
          initials: 'SO',
          value: '14,093',
        },
        {
          id: 'ddddddcxsaasssssssxsszssssssxdds',
          color: colors.orange['900'],
          name: 'Reddit.com',
          initials: 'RD',
          value: '7,251',
        },
        {
          id: 'ddddddcxsaasssssssxsszssssssxddsa',
          color: colors.blueGrey['900'],
          name: 'Dev.to',
          initials: 'DE',
          value: '5,694',
        },
        {
          id: 'ddddddcxsaasssssssxsszssssssxddsacx',
          color: colors.blue['900'],
          name: 'Facebook',
          initials: 'FB',
          value: '3,643',
        },
        {
          id: 'ddddddcxsaasssssssxsszssssssxddsacxasd',
          color: colors.blueGrey['900'],
          name: 'Medium',
          initials: 'MD',
          value: '1,654',
        },
      ],
    };
  }

  @Get('/api/dashboard/profitable-products')
  getTestFor1234edfrgcvbh(): any {
    return {
      products: [
        {
          id: 'ddddddcxsaasssssssxsszssssssxddsacxasdsdc',
          type: 'freelancer_basic',
          name: 'Freelancer Basic Subscription',
          image: '/images/products/product_freelancer.svg',
          subscriptions: '13,153',
          currency: '$',
          price: '5.00',
          progress: 93,
        },
        {
          id: 'ddddddcxsaasssssssxsszssssssxddsacxasdsdcvf',
          type: 'freelancer_extra',
          name: 'Freelancer Extra Subscription',
          image: '/images/products/product_freelancer.svg',
          subscriptions: '10,300',
          currency: '$',
          price: '15.00',
          progress: 76,
        },
        {
          id: 'ddddddcxsaasssssssxsszssssssxddsacxasdsdcvfs',
          type: 'agency_basic',
          name: 'Agency Basic Subscription',
          image: '/images/products/product_agency.svg',
          subscriptions: '5,300',
          currency: '$',
          price: '25.00',
          progress: 60,
        },
        {
          id: 'ddddddcxsaasssssssxsszssssssxddsacxasdsdcvfsd',
          type: 'enterprise_basic',
          name: 'Enterprise Basic Subscription',
          image: '/images/products/product_enterprise.svg',
          subscriptions: '1,203',
          currency: '$',
          price: '205.00',
          progress: 46,
        },
        {
          id: 'ddddddcxsaasssssssxsszssssssxddsacxasdsdcvfsdsd',
          type: 'enterprise_extra',
          name: 'Enterprise Extra Subscription',
          image: '/images/products/product_enterprise.svg',
          subscriptions: '254',
          currency: '$',
          price: '500.00',
          progress: 41,
        },
      ],
    };
  }

  @Get('/api/dashboard/customer-activity')
  getTestFor1234edfrgcvbhn(): any {
    return {
      customers: [
        {
          id: 'ddddddcxsaasssssssxsszssssssxddsacxasdsdcvfsdsdsd',
          type: 'payment',
          description: 'Subscription Purchase',
          author: {
            name: 'Ekaterina Tankova',
            avatar: '/images/avatars/avatar_2.png',
          },
          created_at: moment().subtract(23, 'minutes'),
        },
        {
          id: 'ddddddcxsaasssssssxsszssssssxddsacxasdsdcvfsdsdsdsd',
          type: 'payment',
          description: 'Subscription Purchase',
          author: {
            name: 'Cao Yu',
            avatar: '/images/avatars/avatar_3.png',
          },
          created_at: moment().subtract(56, 'minutes'),
        },
        {
          id: 'ddddddcxsaasssssssxsszssssssxddsacxasdsdcvfsdsdsdsd',
          type: 'payment',
          description: 'Subscription Purchase',
          author: {
            name: 'Alexa Richardson',
            avatar: '/images/avatars/avatar_4.png',
          },
          created_at: moment().subtract(2, 'hours'),
        },
        {
          id: 'cxcv',
          type: 'payment',
          description: 'Subscription Purchase',
          author: {
            name: 'Anje Keizer',
            avatar: '/images/avatars/avatar_5.png',
          },
          created_at: moment().subtract(5, 'minutes'),
        },
        {
          id: 'cxcvxzcv',
          type: 'payment',
          description: 'Subscription Purchase',
          author: {
            name: 'Clarke Gillebert',
            avatar: '/images/avatars/avatar_6.png',
          },
          created_at: moment().subtract(5, 'minutes'),
        },
      ],
    };
  }

  @Get('/api/dashboard/earnings')
  getTestFor1234edfrgcvbhnj(): any {
    return {
      earnings: [
        {
          id: 'cxcvxzcvzx',
          label: 'Subscriptions',
          value: 56,
          color: colors.indigo[500],
        },
        {
          id: 'cxcvxzcvzxc',
          label: 'Afiliate',
          value: 24,
          color: colors.indigo[300],
        },
        {
          id: 'cxcvxzcvzxczxv',
          label: 'Sales',
          value: 20,
          color: colors.indigo[100],
        },
      ],
    };
  }

  @Get('/api/dashboard/latest-orders')
  getTestFor1234edfrgcvbhnjm(): any {
    return {
      orders: [
        {
          id: 'cxcvxzcvzxczxvc',
          ref: 'DEV1042',
          items: 7,
          value: '25.00',
          currency: '$',
          customer: {
            name: 'Ekaterina Tankova',
            email: 'ekaterina@devias.io',
          },
          status: 'pending',
        },
        {
          id: 'cxcvxzcvzxczxvc',
          ref: 'DEV1041',
          items: 8,
          value: '25.00',
          currency: '$',
          customer: {
            name: 'Cao Yu',
            email: 'cao.yu@devias.io',
          },
          status: 'complete',
        },
        {
          id: 'cxcvxzcvzxczxvcc',
          ref: 'DEV1040',
          items: 4,
          value: '25.00',
          currency: '$',
          customer: {
            name: 'Alexa Richardson',
            email: 'alexa.richardson@devias.io',
          },
          status: 'rejected',
        },
        {
          id: 'cxcvxzcvzxczxvccc',
          ref: 'DEV1039',
          items: 1,
          value: '25.00',
          currency: '$',
          customer: {
            name: 'Anje Keizer',
            email: 'anje.keiser@devias.io',
          },
          status: 'pending',
        },
        {
          id: 'cxcvxzcvzxczxvcccc',
          ref: 'DEV1038',
          items: 5,
          value: '25.00',
          currency: '$',
          customer: {
            name: 'Clarke Gillebert',
            email: 'clarke.gillebert@devias.io',
          },
          status: 'complete',
        },
        {
          id: 'cxcvxzcvzxczxvccccc',
          ref: 'DEV1037',
          items: 2,
          value: '25.00',
          currency: '$',
          customer: {
            name: 'Merrile Burgett',
            email: 'merrile.burgett@devias.io',
          },
          status: 'complete',
        },
      ],
    };
  }

  @Get('/api/dashboard/latest-projects')
  getTestFor1234edfrgcvbhnjmk(): any {
    return {
      projects: [
        {
          id: 'cxcvxzcvzxczxvcccccc',
          title: 'Mella Full Screen Slider',
          price: '12,500',
          currency: '$',
          author: {
            name: 'Anje Keizer',
            avatar: '/images/avatars/avatar_5.png',
          },
          tags: [
            {
              text: 'Angular JS',
              color: colors.red[600],
            },
          ],
        },
        {
          id: 'cxcvxzcvzxczxvccccccc',
          title: 'Dashboard Design',
          price: '15,750',
          currency: '$',
          author: {
            name: 'Emilee Simchenko',
            avatar: '/images/avatars/avatar_9.png',
          },
          tags: [
            {
              text: 'HTML & CSS',
              color: colors.grey[600],
            },
          ],
        },
        {
          id: 'cxcvxzcvzxczxvcccccccc',
          title: 'Ten80 Web Design',
          price: '15,750',
          currency: '$',
          author: {
            name: 'Kwak Seong-Min',
            avatar: '/images/avatars/avatar_10.png',
          },
          tags: [
            {
              text: 'React JS',
              color: colors.indigo[600],
            },
          ],
        },
        {
          id: 'cxcvxzcvzxczxvccccccccc',
          title: 'Neura e-commerce UI Kit',
          price: '12,500',
          currency: '$',
          author: {
            name: 'Shen Zhi',
            avatar: '/images/avatars/avatar_11.png',
          },
          tags: [
            {
              text: 'Vue JS',
              color: colors.green[600],
            },
          ],
        },
        {
          id: 'cxcvxzcvzxczxvcccccccccc',
          title: 'Administrator Dashboard',
          price: '15,750',
          currency: '$',
          author: {
            name: 'Cao Yu',
            avatar: '/images/avatars/avatar_3.png',
          },
          tags: [
            {
              text: 'Angular JS',
              color: colors.red[600],
            },
          ],
        },
      ],
    };
  }

  @Get('/api/invoices')
  getTestFor1234edfrgcvbhnjmkl(): any {
    return {
      invoices: [],
    };
  }

  @Get('/api/invoices/1')
  getTestFor1234edfrgcvbhnjmklo(): any {
    return {
      invoice: {
        id: 'cxcvxzcvzxczxvccccccccccc',
        due_date: moment(),
        issue_date: moment().add(15, 'days'),
        ref: 'DEV-9483',
        customer: {
          name: 'Tracey Herman',
          company: 'Countdown Grey Lynn',
          nzbn: '6934656584231',
          address: '271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand',
        },
        products: [
          {
            id: 'cxcvxzcvzxczxvcccccccccccc',
            desc: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
            value: '55.50',
          },
        ],
        subtotal: '50.00',
        taxes: '5.50',
        total: '55.50',
        currency: '$',
        created_at: moment(),
      },
    };
  }

  @Get('/api/kanban')
  getTestFor1234edfrgcvbhnjmkloi(): any {
    return {
      lists: [
        {
          id: 'incoming',
          title: 'Incoming',
        },
        {
          id: 'in_progress',
          title: 'In progress',
        },
        {
          id: 'in_review',
          title: 'In review',
        },
        {
          id: 'completed',
          title: 'Completed',
        },
      ],
      tasks: [
        {
          id: 'cxcvxzcvzxczxvccccccccccccc',
          ref: '38',
          list: 'incoming',
          title: 'Call with sales of HubSpot',
          desc:
            'Duis condimentum lacus finibus felis pellentesque, ac auctor nibh fermentum. Duis sed dui ante. Phasellus id eros tincidunt, dictum lorem vitae, pellentesque sem. Aenean eu enim sit amet mauris rhoncus mollis. Sed enim turpis, porta a felis et, luctus faucibus nisi. Phasellus et metus fermentum, ultrices arcu aliquam, facilisis justo. Cras nunc nunc, elementum sed euismod ut, maximus eget nibh. Phasellus condimentum lorem neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce sagittis pharetra eleifend. Suspendisse potenti.',
          members: [
            '/images/avatars/avatar_1.png',
            '/images/avatars/avatar_5.png',
            '/images/avatars/avatar_6.png',
          ],
          files: 0,
          comments: 1,
          progress: 0,
          deadline: moment().add(7, 'days'),
        },
        {
          id: 'cxcvxzcvzxczxvcccccccccccccc',
          ref: '37',
          list: 'incoming',
          title: 'Interview for the Asis. Sales Manager',
          desc:
            'We are looking for vue experience and of course node js strong knowledge',
          members: [
            '/images/avatars/avatar_2.png',
            '/images/avatars/avatar_3.png',
          ],
          files: 0,
          comments: 2,
          progress: 0,
          deadline: moment().add(6, 'days'),
        },
        {
          id: 'cxcvxzcvzxczxvccccccccccccccc',
          ref: '39',
          list: 'incoming',
          title: 'Change the height of the top bar because it looks too chunky',
          desc:
            'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
          members: ['/images/avatars/avatar_11.png'],
          files: 0,
          comments: 0,
          progress: 0,
          deadline: moment().add(5, 'days'),
        },
        {
          id: 'cxcvxzcvzxczxvcccccccccccccccc',
          ref: '19',
          list: 'incoming',
          title: 'Integrate Stripe API',
          desc:
            'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
          members: [
            '/images/avatars/avatar_6.png',
            '/images/avatars/avatar_5.png',
            '/images/avatars/avatar_9.png',
          ],
          files: 2,
          comments: 1,
          progress: 0,
          deadline: moment().add(4, 'days'),
        },
        {
          id: 'cxcvxzcvzxczxvccccccccccccccccq',
          ref: '15',
          list: 'in_progress',
          title: 'Update the customer API for payments',
          desc:
            'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
          members: ['/images/avatars/avatar_10.png'],
          files: 2,
          comments: 0,
          progress: 60,
          deadline: moment().add(4, 'hours'),
        },
        {
          id: 'cxcvxzcvzxczxvccccccccccccccccqq',
          ref: '10',
          list: 'in_progress',
          title: 'Redesign the landing page',
          desc:
            'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
          members: [
            '/images/avatars/avatar_10.png',
            '/images/avatars/avatar_11.png',
          ],
          files: 0,
          comments: 2,
          progress: 76,
          deadline: moment().add(4, 'hours'),
        },
        {
          id: '34',
          ref: '24',
          list: 'in_review',
          title: 'Change the height of the top bar because it looks too chunky',
          desc:
            'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
          members: [
            '/images/avatars/avatar_6.png',
            '/images/avatars/avatar_4.png',
            '/images/avatars/avatar_2.png',
          ],
          files: 0,
          comments: 7,
          progress: 90,
          deadline: moment().subtract(1, 'days'),
        },
        {
          id: '34c',
          ref: '21',
          list: 'in_review',
          title: 'Integrate Stripe API',
          desc:
            'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
          members: [
            '/images/avatars/avatar_6.png',
            '/images/avatars/avatar_4.png',
            '/images/avatars/avatar_8.png',
            '/images/avatars/avatar_2.png',
          ],
          files: 0,
          comments: 7,
          progress: 90,
          deadline: moment().subtract(1, 'days'),
        },
        {
          id: '34cc',
          ref: '17',
          list: 'completed',
          title: 'Design Customer Management Page',
          desc: 'Change the height of the top bar because it looks too chunky',
          members: [
            '/images/avatars/avatar_6.png',
            '/images/avatars/avatar_2.png',
            '/images/avatars/avatar_9.png',
          ],
          files: 3,
          comments: 3,
          progress: 100,
          deadline: moment().subtract(7, 'days'),
        },
        {
          id: '34ccc',
          ref: '23',
          list: 'completed',
          title: 'Integrate Messaging API',
          desc:
            'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
          members: [
            '/images/avatars/avatar_6.png',
            '/images/avatars/avatar_4.png',
            '/images/avatars/avatar_5.png',
            '/images/avatars/avatar_2.png',
            '/images/avatars/avatar_9.png',
          ],
          files: 1,
          comments: 0,
          progress: 100,
          deadline: moment().subtract(7, 'days'),
        },
      ],
    };
  }

  @Get('/api/mail')
  getTestFor1234edfrgcvbhnjmkloiu(): any {
    return {
      emails: [
        {
          id: '34cccs',
          seen: true,
          favorited: true,
          labels: [
            {
              text: 'Business',
              color: colors.blue[600],
            },
            {
              text: 'Personal',
              color: colors.orange[600],
            },
          ],
          subject: 'Website redesign. Interested in collaboration',
          message: `
  Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

  Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

  Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.

  Kind regards,

  Ekaterina Tankova
        `,
          receiver: {
            name: 'Ekaterina Tankova',
            email: 'ekaterina.tankova@devias.io',
            avatar: '/images/avatars/avatar_2.png',
          },
          created_at: moment(),
        },
        {
          id: '34cccsa',
          seen: false,
          favorited: false,
          labels: [],
          subject: 'Amazing work',
          message:
            "Hey, nice projects! I really liked the one in react. What's your quote on kinda similar project?",
          receiver: {
            name: 'Adam Denisov',
            email: 'adam.denisov@devias.io',
            avatar: '/images/avatars/avatar_7.png',
          },
          created_at: moment(),
        },
        {
          id: '34cccsaz',
          seen: false,
          favorited: false,
          subject: 'Flight reminder',
          labels: [
            {
              text: 'Work',
              color: colors.green[600],
            },
          ],
          message:
            'Dear Shen, Your flight is coming up soon. Please don’t forget to check in for your scheduled flight.',
          receiver: {
            name: 'Clarke Gillebert',
            avatar: '/images/avatars/avatar_6.png',
          },
          created_at: moment(),
        },
        {
          id: '34cccsazcf',
          seen: true,
          favorited: true,
          labels: [],
          subject: 'Posible candidates for the position',
          message:
            'My market leading client has another fantastic opportunity for an experienced Software Developer to join them on a heavily remote basis',
          receiver: {
            name: 'Cao Yu',
            avatar: '/images/avatars/avatar_3.png',
          },
          created_at: moment(),
        },
      ],
    };
  }

  @Get('/api/orders')
  getTestFor1234edfrgcvbhnjmkloiuy(): any {
    return {
      orders: [
        {
          id: '34cccsazcfd',
          created_at: moment().subtract(10, 'minutes'),
          customer: {
            name: 'Ekaterina Tankova',
          },
          payment: {
            ref: 'FAD103',
            method: 'CreditCard',
            total: '500.00',
            currency: '$',
            status: 'pending',
          },
          status: 'inactive',
        },
        {
          id: '34cccsazcfdx',
          created_at: moment()
            .subtract(32, 'minutes')
            .subtract(23, 'seconds'),
          customer: {
            name: 'Cao Yu',
          },
          payment: {
            ref: 'FAD102',
            method: 'CreditCard',
            total: '500.00',
            currency: '$',
            status: 'pending',
          },
          status: 'inactive',
        },
        {
          id: '34cccsazcfdxd',
          created_at: moment()
            .subtract(36, 'minutes')
            .subtract(51, 'seconds'),
          customer: {
            name: 'Alexa Richardson',
          },
          payment: {
            ref: 'FAD101',
            method: 'PayPal',
            total: '500.00',
            currency: '$',
            status: 'completed',
          },
          status: 'active',
        },
        {
          id: '34cccsazcfdxdsa',
          created_at: moment()
            .subtract(38, 'minutes')
            .subtract(55, 'seconds'),
          customer: {
            name: 'Anje Keizer',
          },
          payment: {
            ref: 'FAD100',
            method: 'CreditCard',
            total: '500.00',
            currency: '$',
            status: 'pending',
          },
          status: 'inactive',
        },
        {
          id: '34cccsazcfdxdsad',
          created_at: moment()
            .subtract(40, 'minutes')
            .subtract(3, 'seconds'),
          customer: {
            name: 'Clarke Gillebert',
          },
          payment: {
            ref: 'FAD99',
            method: 'PayPal',
            total: '500.00',
            currency: '$',
            status: 'completed',
          },
          status: 'active',
        },
        {
          id: '34cccsazcfdxdsadfv',
          created_at: moment()
            .subtract(45, 'minutes')
            .subtract(32, 'seconds'),
          customer: {
            name: 'Adam Denisov',
          },
          payment: {
            ref: 'FAD98',
            method: 'PayPal',
            total: '500.00',
            currency: '$',
            status: 'completed',
          },
          status: 'active',
        },
        {
          id: '34cccsazcfdxdsadfvs',
          created_at: moment()
            .subtract(48, 'minutes')
            .subtract(57, 'seconds'),
          customer: {
            name: 'Ava Gregoraci',
            avatar: '/images/avatars/avatar_8.png',
          },
          payment: {
            ref: 'FAD97',
            method: 'CreditCard',
            total: '500.00',
            currency: '$',
            status: 'pending',
          },
          status: 'inactive',
        },
        {
          id: '34cccsazcfdxdsadfvsc',
          created_at: moment()
            .subtract(49, 'minutes')
            .subtract(4, 'seconds'),
          customer: {
            name: 'Emilee Simchenko',
          },
          payment: {
            ref: 'FAD96',
            method: 'CreditCard',
            total: '500.00',
            currency: '$',
            status: 'completed',
          },
          status: 'active',
        },
        {
          id: '34cccsazcfdxdsadfvsca',
          created_at: moment()
            .subtract(57, 'minutes')
            .subtract(43, 'seconds'),
          customer: {
            name: 'Kwak Seong-Min',
          },
          payment: {
            ref: 'FAD95',
            method: 'PayPal',
            total: '500.00',
            currency: '$',
            status: 'rejected',
          },
          status: 'inactive',
        },
        {
          id: '34cccsazcfdxdsadfvscac',
          created_at: moment()
            .subtract(59, 'minutes')
            .subtract(6, 'seconds'),
          customer: {
            name: 'Shen Zhi',
          },
          payment: {
            ref: 'FAD94',
            method: 'CreditCard',
            total: '500.00',
            currency: '$',
            status: 'canceled',
          },
          status: 'inactive',
        },
        {
          id: '34cccsazcfdxdsadfvscacasd',
          created_at: moment()
            .subtract(1, 'hour')
            .subtract(15, 'minutes')
            .subtract(43, 'seconds'),
          customer: {
            name: 'Merrile Burgett',
          },
          payment: {
            ref: 'FAD93',
            method: 'PayPal',
            total: '500.00',
            currency: '$',
            status: 'canceled',
          },
          status: 'inactive',
        },
      ],
    };
  }

  @Get('/api/orders/1')
  getTestFor1234edfrgcvbhnjmkloiuyy(): any {
    return {
      order: {
        id: '34cccsazcfdxdsadfvscacasd',
        ref: 'FAD107',
        promoCode: null,
        value: '55.25',
        currency: '$',
        status: 'canceled',
        customer: {
          name: 'Ekaterina Tankova',
          address: 'Street King William, 42456',
          city: 'Montgomery',
          country: 'United States',
        },
        items: [
          {
            id: '34cccsazcfdxdsadfvscacasdcxz',
            name: 'Project Points',
            cuantity: 25,
            billing: 'monthly',
            status: 'completed',
            value: '50.25',
            currency: '$',
          },
          {
            id: '34cccsazcfdxdsadfvscacasdcxzxc',
            name: 'Freelancer Subscription',
            cuantity: 1,
            billing: 'monthly',
            status: 'completed',
            value: '5.00',
            currency: '$',
          },
        ],
        created_at: moment(),
      },
    };
  }

  @Get('/api/projects')
  getTestFor1234edfrgcvbhnjmkloiuyyt(): any {
    return {
      projects: [
        {
          id: '34cccsazcfdxdsadfvscacasdcxzxc',
          title: 'Mella Full Screen Slider',
          author: {
            name: 'Anje Keizer',
            avatar: '/images/avatars/avatar_5.png',
          },
          price: '12,500',
          currency: '$',
          type: 'Full-Time',
          location: 'Europe',
          status: 'In progress',
          members: 5,
          tags: [
            {
              text: 'Angular JS',
              color: colors.red[600],
            },
          ],
          start_date: moment(),
          end_date: moment(),
          updated_at: moment().subtract(24, 'minutes'),
        },
        {
          id: '34cccsazcfdxdsadfvscacasdcxzxcxcx',
          title: 'Dashboard Design',
          author: {
            name: 'Emilee Simchenko',
            avatar: '/images/avatars/avatar_9.png',
          },
          price: '15,750',
          currency: '$',
          type: 'Full-Time',
          location: 'Europe',
          status: 'In progress',
          members: 3,
          tags: [
            {
              text: 'HTML & CSS',
              color: colors.grey[600],
            },
          ],
          start_date: moment(),
          end_date: moment(),
          updated_at: moment().subtract(1, 'hour'),
        },
        {
          id: '34cccsazcfdxdsadfvscacasdcxzxcxcxx',
          title: 'Ten80 Web Design',
          author: {
            name: 'Kwak Seong-Min',
            avatar: '/images/avatars/avatar_10.png',
          },
          price: '15,750',
          currency: '$',
          type: 'Full-Time',
          location: 'Europe',
          status: 'Completed',
          members: 8,
          tags: [
            {
              text: 'React JS',
              color: colors.indigo[600],
            },
          ],
          start_date: moment(),
          end_date: moment(),
          updated_at: moment().subtract(16, 'hour'),
        },
        {
          id: '34cccsazcfdxdsadfvscacasdcxzxcxcxxx',
          title: 'Neura e-commerce UI Kit',
          author: {
            name: 'Shen Zhi',
            avatar: '/images/avatars/avatar_11.png',
          },
          price: '12,500',
          currency: '$',
          type: 'Full-Time',
          location: 'Europe',
          status: 'In progress',
          members: 10,
          tags: [
            {
              text: 'Vue JS',
              color: colors.green[600],
            },
          ],
          start_date: moment(),
          end_date: moment(),
          updated_at: moment().subtract(3, 'days'),
        },
        {
          id: '34cccsazcfdxdsadfvscacasdcxzxcxcxxxx',
          title: 'Administrator Dashboard',
          author: {
            name: 'Cao Yu',
            avatar: '/images/avatars/avatar_3.png',
          },
          price: '15,750',
          currency: '$',
          type: 'Full-Time',
          location: 'Europe',
          status: 'Canceled',
          members: 2,
          tags: [
            {
              text: 'Angular JS',
              color: colors.red[600],
            },
            {
              text: 'HTML & CSS',
              color: colors.grey[600],
            },
          ],
          start_date: moment(),
          end_date: moment(),
          updated_at: moment().subtract(7, 'days'),
        },
        {
          id: '34cccsazcfdxdsadfvscacasdcxzxcxcxxxxx',
          title: 'Kalli UI Kit',
          author: {
            name: 'Anje Keizer',
            avatar: '/images/avatars/avatar_5.png',
          },
          price: '15,750',
          currency: '$',
          type: 'Full-Time',
          location: 'Europe',
          status: 'Completed',
          members: 12,
          tags: [
            {
              text: 'Vue JS',
              color: colors.green[600],
            },
          ],
          start_date: moment(),
          end_date: moment(),
          updated_at: moment().subtract(8, 'days'),
        },
      ],
    };
  }

  @Get('/api/projects/1')
  getTestFor1234edfrgcvbhnjmkloiuyytr(): any {
    return {
      project: {
        title: 'Develop a PDF Export App',
        author: {
          name: 'Emilee Simchenko',
          avatar: '/images/avatars/avatar_9.png',
          bio: 'We build beautiful functional themes for web professionals',
        },
        brief: `
  #### TL;DR

  The primary aim of the product is to convert survery responses into PDF reports, these reports are generated on to what we call templates. This product is designer to work with 3rd party survery providers. The first MVP will integrate with TypeForm, because the's no direct way to convert results to PDF from the form people create in TypeForm and then ask users to fill out.

  #### Background information

  Design files are attachedin the files tab.

  Develop the web app screens for our product called "PDFace". Please look at the wireframes, system activity workflow and read the section above to understand what we're trying to archive.

  There's not many screens we need designed, but there will be modals and various other system triggered evenets that will need to be considered.

  The project has benn created in Sketch so let me know if there are any problmes opening this project and I'll try to convert into a usable file.

  I have attached a chat with our users most used devices.

  #### Goals:
    - Maintainable Code
    - Easy UX
    - Readable Code
    - No Redux
      `,
        price: '12,500',
        currency: 'USD',
        tags: [
          {
            text: 'React JS',
            color: colors.indigo[600],
          },
        ],
        members: [
          {
            id: '34cccsazcfdxdsadfvscacasdcxzxcxcxxxxxx',
            name: 'Ekaterina Tankova',
            avatar: '/images/avatars/avatar_2.png',
            bio: 'Front End Developer',
          },
          {
            id: '34cccsazcfdxdsadfvscacasdcxzxcxcxxxxxxx',
            name: 'Cao Yu',
            avatar: '/images/avatars/avatar_3.png',
            bio: 'UX Designer',
          },
          {
            id: '34cccsazcfdxdsadfvscacasdcxzxcxcxxxxxxxx',
            name: 'Anje Keizer',
            avatar: '/images/avatars/avatar_5.png',
            bio: 'Copyright',
          },
        ],
        files: [
          {
            id: '34cccsazcfdxdsadfvscacasdcxzxcxcxxxxxxxxx',
            name: 'example-project1.jpg',
            url: '/images/projects/project_2.jpg',
            mimeType: 'image/png',
            size: 1024 * 1024 * 3,
          },
          {
            id: '34cccsazcfdxdsadfvscacasdcxzxcxcxxxxxxxxxx',
            name: 'docs.zip',
            url: '#',
            mimeType: 'application/zip',
            size: 1024 * 1024 * 25,
          },
          {
            id: '34cccsazcfdxdsadfvscacasdcxzxcxcxxxxxxxxxxx',
            name: 'example-project2.jpg',
            url: '/images/projects/project_1.jpg',
            mimeType: 'image/png',
            size: 1024 * 1024 * 2,
          },
        ],
        activities: [
          {
            id: '34cccsazcfdxdsadfvscacasdcxzxcxcxxxxxxxxxxxx',
            subject: 'Project owner',
            subject_type: 'user',
            action_type: 'upload_file',
            action_desc: 'has uploaded a new file',
            created_at: moment().subtract(23, 'minutes'),
          },
          {
            id: '34cccsazcfdxdsadfvscacasdcxzxcxcxxxxxxxxxxxxx',
            subject: 'Adrian Stefan',
            subject_type: 'user',
            action_type: 'join_team',
            action_desc: 'joined team as a Front-End Developer',
            created_at: moment().subtract(2, 'hours'),
          },
          {
            id: '34cccsazcfdxdsadfvscacasdcxzxcxcxxxxxxxxxxxxxx',
            subject: 'Alexandru Robert',
            action_type: 'join_team',
            action_desc: 'joined team as a Full Stack Developer',
            created_at: moment().subtract(9, 'hours'),
          },
          {
            id: '34cccsazcfdxdsadfvscacasdcxzxcxcxxxxxxxxxxxxxxx',
            subject: 'Project owner',
            subject_type: 'user',
            action_type: 'price_change',
            action_desc: 'raised the project budget',
            created_at: moment().subtract(2, 'days'),
          },
          {
            id: '34cccsazcfdxdsadfvscacasdcxzxcxcxxxxxxxxxxxxxxxx',
            subject: 'Contest',
            subject_type: 'project',
            action_type: 'contest_created',
            action_desc: 'created',
            created_at: moment().subtract(4, 'days'),
          },
        ],
        subscribers: [
          {
            id: '34cccsazcfdxdsadfvscacasdcxzxcxcxxxxxxxxxxxxxxxxx',
            name: 'Ekaterina Tankova',
            avatar: '/images/avatars/avatar_2.png',
            cover: '/images/covers/cover_1.jpg',
            common_connections: 12,
            labels: [
              'User Experience',
              'FrontEnd development',
              'HTML5',
              'VueJS',
              'ReactJS',
            ],
          },
          {
            id: '34cccsazcfdxdsadfvscacasdcxzxcxcxxxxxxxxxxxxxxxxxx',
            name: 'Cao Yu',
            avatar: '/images/avatars/avatar_3.png',
            cover: '/images/covers/cover_2.jpg',
            common_connections: 5,
            labels: [
              'User Interface',
              'FullStack development',
              'Angular',
              'ExpressJS',
            ],
          },
          {
            id: '1',
            name: 'Clarke Gillebert',
            avatar: '/images/avatars/avatar_6.png',
            cover: '/images/covers/cover_2.jpg',
            common_connections: 17,
            labels: ['BackEnd development', 'Firebase', 'MongoDB', 'ExpressJS'],
          },
        ],
        deadline: moment().add(7, 'days'),
        updated_at: moment().subtract(23, 'minutes'),
      },
    };
  }

  @Get('/api/social-feed')
  getTestFor1234edfrgcvbhnjmkloiuyytrr(): any {
    return {
      posts: [
        {
          id: '12',
          author: {
            name: 'Kwak Seong-Min',
            avatar: '/images/avatars/avatar_10.png',
          },
          message: "Hey guys! What's your favorite framework?",
          liked: true,
          likes: 1,
          comments: [
            {
              id: '123',
              author: {
                name: 'Merrile Burgett',
                avatar: '/images/avatars/avatar_12.png',
              },
              message: "I've been using Angular for the past 3 years",
              created_at: moment().subtract(3, 'hours'),
            },
          ],
          created_at: moment().subtract(16, 'minutes'),
        },
        {
          id: '1234',
          author: {
            name: 'Shen Zhi',
            avatar: '/images/avatars/avatar_11.png',
          },
          message:
            'Just made this home screen for a project, what-cha thinkin?',
          media: '/images/posts/post_1.jpg',
          liked: true,
          likes: 24,
          comments: [
            {
              id: '1234ds',
              author: {
                name: 'Anje Keizer',
                avatar: '/images/avatars/avatar_5.png',
              },
              message: 'Could use some more statistics, but that’s me haha',
              created_at: moment().subtract(3, 'hours'),
            },
            {
              id: '1234dss',
              author: {
                name: 'Ava Gregoraci',
                avatar: '/images/avatars/avatar_8.png',
              },
              message:
                'Hmm, honestly this looks nice but I would change the shadow though',
              created_at: moment().subtract(2, 'hours'),
            },
          ],
          created_at: moment().subtract(4, 'hours'),
        },
        {
          id: '1234dsss',
          author: {
            name: 'Shen Zhi',
            avatar: '/images/avatars/avatar_11.png',
          },
          message:
            'As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it.',
          liked: false,
          likes: 65,
          comments: [
            {
              id: '1234dssss',
              author: {
                name: 'Clarke Gillebert',
                avatar: '/images/avatars/avatar_6.png',
              },
              message:
                'That’s actually deep. Thanks for the design, would you consider making an interaction?',
              created_at: moment().subtract(3, 'hours'),
            },
            {
              id: '1234dsssss',
              author: {
                name: 'Alexa Richardson',
                avatar: '/images/avatars/avatar_4.png',
              },
              message: 'Oh... so sentimental',
              created_at: moment().subtract(2, 'hours'),
            },
          ],
          created_at: moment().subtract(7, 'hours'),
        },
      ],
    };
  }

  @Get('/api/tasks')
  getTestFor1234edfrgcvbhnjmkloiuyytrre(): any {
    return {
      tasks: [
        {
          id: '1234dssssss',
          title: 'Update the API for the project',
          deadline: moment()
            .add(1, 'days')
            .add(1, 'hour'),
          members: [
            '/images/avatars/avatar_2.png',
            '/images/avatars/avatar_3.png',
            '/images/avatars/avatar_4.png',
            '/images/avatars/avatar_5.png',
            '/images/avatars/avatar_6.png',
            '/images/avatars/avatar_7.png',
          ],
        },
        {
          id: '1234dsssssss',
          title: 'Redesign the landing page',
          deadline: moment()
            .add(2, 'day')
            .add(1, 'hour'),
          members: [
            '/images/avatars/avatar_8.png',
            '/images/avatars/avatar_10.png',
            '/images/avatars/avatar_12.png',
          ],
        },
        {
          id: '1234dssssssss',
          title: 'Solve the bug for the showState',
          deadline: moment(),
          members: ['/images/avatars/avatar_7.png'],
        },
        {
          id: '1234dsssssssss',
          title: 'Release v1.0 Beta',
          deadline: null,
          members: [
            '/images/avatars/avatar_2.png',
            '/images/avatars/avatar_10.png',
          ],
        },
        {
          id: '1234dssssssssss',
          title: 'GDPR Compliance',
          deadline: null,
          members: [
            '/images/avatars/avatar_5.png',
            '/images/avatars/avatar_2.png',
            '/images/avatars/avatar_6.png',
          ],
        },
        {
          id: '1234dsssssssssss',
          title: 'Redesign Landing Page',
          deadline: null,
          members: ['/images/avatars/avatar_8.png'],
        },
      ],
    };
  }

  @Get('/api/users')
  getTestFor1234edfrgcvbhnjmkloiuyytrred(): any {
    return {
      users: [],
    };
  }

  @Get('/api/users/1/posts')
  getTestFor1234edfrgcvbhnjmkloiuyytrredg(): any {
    return {
      posts: [
        {
          id: '1234dssssssssssss',
          author: {
            name: 'Shen Zhi',
            avatar: '/images/avatars/avatar_11.png',
          },
          message:
            'Just made this home screen for a project, what-cha thinkin?',
          media: '/images/posts/post_1.jpg',
          liked: true,
          likes: 24,
          comments: [
            {
              id: '1234dsssssssssssss',
              author: {
                name: 'Anje Keizer',
                avatar: '/images/avatars/avatar_5.png',
              },
              message: 'Could use some more statistics, but that’s me haha',
              created_at: moment().subtract(3, 'hours'),
            },
            {
              id: '1234dssssssssssssss',
              author: {
                name: 'Ava Gregoraci',
                avatar: '/images/avatars/avatar_8.png',
              },
              message:
                'Hmm, honestly this looks nice but I would change the shadow though',
              created_at: moment().subtract(2, 'hours'),
            },
          ],
          created_at: moment().subtract(4, 'hours'),
        },
        {
          id: '1234dsssssssssssssss',
          author: {
            name: 'Shen Zhi',
            avatar: '/images/avatars/avatar_11.png',
          },
          message:
            'As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it.',
          liked: false,
          likes: 65,
          comments: [
            {
              id: '1234dssssssssssssssss',
              author: {
                name: 'Clarke Gillebert',
                avatar: '/images/avatars/avatar_6.png',
              },
              message:
                'That’s actually deep. Thanks for the design, would you consider making an interaction?',
              created_at: moment().subtract(3, 'hours'),
            },
            {
              id: '1234dsssssssssssssssss',
              author: {
                name: 'Alexa Richardson',
                avatar: '/images/avatars/avatar_4.png',
              },
              message: 'It looks nice',
              created_at: moment().subtract(2, 'hours'),
            },
          ],
          created_at: moment().subtract(7, 'hours'),
        },
      ],
    };
  }

  @Get('/api/users/1/projects')
  getTestFor1234edfrgcvbhnjmkloiuyytrredgh(): any {
    return {
      projects: [
        {
          id: '1234dssssssssssssssssss',
          title: 'Mella Full Screen Slider',
          author: {
            name: 'Anje Keizer',
            avatar: '/images/avatars/avatar_5.png',
          },
          price: '12,500',
          currency: '$',
          type: 'Full-Time',
          location: 'Europe',
          tags: [
            {
              text: 'Angular JS',
              color: colors.red[600],
            },
          ],
          updated_at: moment().subtract(24, 'minutes'),
        },
        {
          id: '1234dsssssssssssssssssss',
          title: 'Dashboard Design',
          author: {
            name: 'Devias IO',
            avatar: '',
          },
          price: '15,750',
          currency: '$',
          type: 'Full-Time',
          location: 'Europe',
          tags: [
            {
              text: 'React JS',
              color: colors.indigo[600],
            },
          ],
          updated_at: moment().subtract(1, 'hour'),
        },
        {
          id: '1234dssssssssssssssssssss',
          title: 'Ten80 Web Design',
          author: {
            name: 'Devias IO',
            avatar: '',
          },
          price: '15,750',
          currency: '$',
          type: 'Full-Time',
          location: 'Europe',
          tags: [
            {
              text: 'Vue JS',
              color: colors.green[600],
            },
          ],
          updated_at: moment().subtract(16, 'hour'),
        },
      ],
    };
  }

  @Get('/api/users/1/reviews')
  getTestFor1234edfrgcvbhnjmkloiuyytrredghv(): any {
    return {
      reviews: [
        {
          id: '1234dsssssssssssssssssssss',
          rating: 4,
          message:
            'Shen was really great during the all time session we created the project',
          reviewer: {
            name: 'Ekaterina Tankova',
            avatar: '/images/avatars/avatar_2.png',
          },
          project: {
            title: 'Mella Full Screen Slider',
            price: '5,240.00',
          },
          pricePerHour: '43.00',
          hours: 31,
          currency: '$',
          created_at: moment().subtract(4, 'hours'),
        },
        {
          id: '1234dssssssssssssssssssssss',
          rating: 5,
          reviewer: {
            name: 'Cao Yu',
            avatar: '/images/avatars/avatar_3.png',
          },
          project: {
            title: 'Dashboard Design',
            price: '3,680.00',
          },
          pricePerHour: '38.00',
          hours: 76,
          currency: '$',
          message:
            "Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys holding a dancing-ape by a long cord. Just so, from the ship's steep side, did I hold Queequeg down there in the sea, by what is technically called in the fishery a monkey-rope, attached to a strong strip of canvas belted round his waist.",
          created_at: moment().subtract(8, 'days'),
        },
      ],
    };
  }

  @Get('/api/users/1/connections')
  getTestFor1234edfrgcvbhnjmkloiuyytrredghvdf(): any {
    return {
      connections: [
        {
          id: 'ZX',
          name: 'Ekaterina Tankova',
          avatar: '/images/avatars/avatar_2.png',
          common: 12,
          status: 'connected',
        },
        {
          id: 'ZXx',
          name: 'Cao Yu',
          avatar: '/images/avatars/avatar_3.png',
          common: 10,
          status: 'rejected',
        },
        {
          id: 'ZXxx',
          name: 'Alexa Richardson',
          avatar: '/images/avatars/avatar_4.png',
          common: 8,
          status: 'pending',
        },
        {
          id: 'ZXxxx',
          name: 'Adam Denisov',
          avatar: '/images/avatars/avatar_7.png',
          common: 5,
          status: 'not_connected',
        },
        {
          id: 'ZXxxxx',
          name: 'Ava Gregoraci',
          avatar: '/images/avatars/avatar_8.png',
          common: 1,
          status: 'connected',
        },
      ],
    };
  }
}

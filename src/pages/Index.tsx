import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface ForumThread {
  id: number;
  title: string;
  author: string;
  category: string;
  replies: number;
  views: number;
  lastActivity: string;
  isPinned?: boolean;
  isLocked?: boolean;
}

interface CategoryData {
  id: string;
  name: string;
  icon: string;
  description: string;
  threads: number;
  posts: number;
  color: string;
}

const Index = () => {
  const categories: CategoryData[] = [
    {
      id: 'news',
      name: 'Новости сервера и обновления',
      icon: 'Megaphone',
      description: 'Последние новости, патчи и обновления Miami RP',
      threads: 42,
      posts: 156,
      color: 'bg-gradient-to-r from-primary to-accent'
    },
    {
      id: 'rules',
      name: 'Правила сервера и форума',
      icon: 'Shield',
      description: 'Правила игры, администрирования и поведения на форуме',
      threads: 8,
      posts: 23,
      color: 'bg-gradient-to-r from-secondary to-primary'
    },
    {
      id: 'applications',
      name: 'Заявки на должности и фракции',
      icon: 'FileText',
      description: 'Подача заявок на вступление во фракции и получение должностей',
      threads: 234,
      posts: 567,
      color: 'bg-gradient-to-r from-accent to-secondary'
    },
    {
      id: 'complaints',
      name: 'Жалобы на игроков и администрацию',
      icon: 'AlertCircle',
      description: 'Обращения по нарушениям правил и жалобы',
      threads: 89,
      posts: 312,
      color: 'bg-gradient-to-r from-destructive to-primary'
    },
    {
      id: 'general',
      name: 'Общий раздел для обсуждений',
      icon: 'MessageSquare',
      description: 'Общение игроков, обсуждение игрового процесса',
      threads: 456,
      posts: 1823,
      color: 'bg-gradient-to-r from-primary to-secondary'
    },
    {
      id: 'guides',
      name: 'Руководства и полезная информация',
      icon: 'BookOpen',
      description: 'Гайды, FAQ и полезные материалы для новичков',
      threads: 67,
      posts: 245,
      color: 'bg-gradient-to-r from-secondary to-accent'
    }
  ];

  const recentThreads: ForumThread[] = [
    {
      id: 1,
      title: 'Обновление 2.5: Новые автомобили и локации',
      author: 'Admin_Mike',
      category: 'news',
      replies: 24,
      views: 342,
      lastActivity: '5 минут назад',
      isPinned: true
    },
    {
      id: 2,
      title: 'Правила поведения в зелёных зонах',
      author: 'GameMaster',
      category: 'rules',
      replies: 12,
      views: 156,
      lastActivity: '1 час назад',
      isPinned: true,
      isLocked: true
    },
    {
      id: 3,
      title: 'Заявка на вступление в Полицию - Виктор Родригес',
      author: 'Viktor_Rod',
      category: 'applications',
      replies: 3,
      views: 45,
      lastActivity: '2 часа назад'
    },
    {
      id: 4,
      title: 'Жалоба на игрока за нарушение RP',
      author: 'Carlos_Miami',
      category: 'complaints',
      replies: 8,
      views: 89,
      lastActivity: '3 часа назад'
    },
    {
      id: 5,
      title: 'Как получить первую работу на сервере?',
      author: 'Newbie_Player',
      category: 'general',
      replies: 15,
      views: 234,
      lastActivity: '4 часа назад'
    },
    {
      id: 6,
      title: 'Гайд по заработку для новичков',
      author: 'ProHelper',
      category: 'guides',
      replies: 31,
      views: 512,
      lastActivity: '5 часов назад'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredThreads = selectedCategory === 'all' 
    ? recentThreads 
    : recentThreads.filter(thread => thread.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
                <span className="text-2xl">🏖️</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  MIAMI RP FORUM
                </h1>
                <p className="text-sm text-muted-foreground">Добро пожаловать на форум сервера</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-secondary/50 hover:border-secondary">
                <Icon name="LogIn" className="mr-2 h-4 w-4" />
                Войти
              </Button>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="UserPlus" className="mr-2 h-4 w-4" />
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Card 
                key={category.id}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50 group overflow-hidden"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className={`h-2 ${category.color}`}></div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon name={category.icon as any} className="h-6 w-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Темы</div>
                      <div className="text-2xl font-bold text-primary">{category.threads}</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg mt-4">{category.name}</CardTitle>
                  <CardDescription className="text-sm">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Сообщения</span>
                    <span className="font-semibold text-secondary">{category.posts}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Последние темы</CardTitle>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setSelectedCategory('all')}
                className={selectedCategory !== 'all' ? 'border-primary text-primary' : ''}
              >
                {selectedCategory !== 'all' ? 'Показать все' : 'Все темы'}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredThreads.map((thread) => (
                <div
                  key={thread.id}
                  className="flex items-center gap-4 p-4 rounded-lg border-2 border-border/50 hover:border-primary/50 hover:bg-muted/30 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    {thread.isPinned && (
                      <Icon name="Pin" className="h-4 w-4 text-primary flex-shrink-0" />
                    )}
                    {thread.isLocked && (
                      <Icon name="Lock" className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    )}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold group-hover:text-primary transition-colors truncate">
                        {thread.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <span>от {thread.author}</span>
                        <span>•</span>
                        <Badge variant="outline" className="text-xs">
                          {categories.find(c => c.id === thread.category)?.name}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center gap-6 text-sm flex-shrink-0">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="MessageSquare" className="h-4 w-4" />
                      <span className="font-semibold text-foreground">{thread.replies}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Eye" className="h-4 w-4" />
                      <span className="font-semibold text-foreground">{thread.views}</span>
                    </div>
                    <div className="text-muted-foreground min-w-[120px] text-right">
                      {thread.lastActivity}
                    </div>
                  </div>

                  <Icon name="ChevronRight" className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Users" className="h-5 w-5 text-primary" />
                Статистика форума
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Всего тем</span>
                <span className="font-bold text-primary">896</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Сообщений</span>
                <span className="font-bold text-secondary">3,126</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Участников</span>
                <span className="font-bold text-accent">1,542</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="TrendingUp" className="h-5 w-5 text-secondary" />
                Онлайн сейчас
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">На форуме</span>
                <span className="font-bold text-secondary">127</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">На сервере</span>
                <span className="font-bold text-primary">456/500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Рекорд онлайн</span>
                <span className="font-bold text-accent">498</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Star" className="h-5 w-5 text-accent" />
                Последний участник
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                  JD
                </div>
                <div>
                  <div className="font-semibold">Johnny_Depp</div>
                  <div className="text-sm text-muted-foreground">Зарегистрирован 10 мин назад</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t border-border/50 mt-16 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="font-bold text-lg mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Miami RP
              </h3>
              <p className="text-sm text-muted-foreground">
                Лучший русскоязычный RP сервер в Vice City. Присоединяйся к нашему сообществу!
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Быстрые ссылки</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Правила сервера</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Донат</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Discord сервер</li>
                <li className="hover:text-primary cursor-pointer transition-colors">VK группа</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: support@miamirp.ru</li>
                <li>Сервер: 185.169.134.44:7777</li>
                <li>Онлайн: 456/500</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground pt-6 border-t border-border/50">
            © 2024 Miami RP. Все права защищены. Powered by XenForo™
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

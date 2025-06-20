import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, MapPin, Clock, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const events = [
        {
            id: 1,
            title: "React Workshop: Building Modern Web Apps",
            description: "Learn the fundamentals of React and build your first interactive web application.",
            date: "2024-06-25",
            time: "14:00",
            location: "Computer Science Building, Room 201",
            category: "Workshop",
            attendees: 24,
            maxAttendees: 30,
            organizer: "Tech Society"
        },
        {
            id: 2,
            title: "Hackathon 2024: Innovation Challenge",
            description: "48-hour coding competition to solve real-world problems with innovative solutions.",
            date: "2024-06-28",
            time: "09:00",
            location: "Engineering Hall",
            category: "Hackathon",
            attendees: 87,
            maxAttendees: 100,
            organizer: "Engineering Club"
        },
        {
            id: 3,
            title: "Career Fair: Meet Industry Leaders",
            description: "Network with top companies and explore internship and job opportunities.",
            date: "2024-07-02",
            time: "10:00",
            location: "Student Union Center",
            category: "Career",
            attendees: 156,
            maxAttendees: 200,
            organizer: "Career Services"
        },
        {
            id: 4,
            title: "Photography Club Meeting",
            description: "Monthly meetup to share work, discuss techniques, and plan upcoming photo walks.",
            date: "2024-06-22",
            time: "19:00",
            location: "Art Building, Studio 3",
            category: "Club Meeting",
            attendees: 12,
            maxAttendees: 20,
            organizer: "Photography Club"
        }
    ];

    const categories = ['all', 'Workshop', 'Hackathon', 'Career', 'Club Meeting'];

    const filteredEvents = events.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const getCategoryColor = (category: string) => {
        const colors = {
            'Workshop': 'bg-blue-100 text-blue-800',
            'Hackathon': 'bg-purple-100 text-purple-800',
            'Career': 'bg-green-100 text-green-800',
            'Club Meeting': 'bg-orange-100 text-orange-800'
        };
        return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                {/* Navigation */}
                <nav className="bg-white shadow-sm border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center">
                                <Calendar className="h-8 w-8 text-blue-600 mr-2" />
                                <span className="text-xl font-bold text-gray-900">UniEvents</span>
                            </div>
                            <div className="flex space-x-4">
                                <Link to="/login">
                                    <Button variant="ghost">Login</Button>
                                </Link>
                                <Link to="/signup">
                                    <Button>Sign Up</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                        <div className="text-center">
                            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
                                Discover Amazing
                                <span className="text-blue-600 block">University Events</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                Join workshops, hackathons, career fairs, and club meetings. Connect with fellow students and build your future.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/signup">
                                    <Button
                                        size="lg"
                                        className="text-lg px-8 py-3"
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="text-lg px-8 py-3"
                                    onClick={() => setIsLoggedIn(true)}
                                >
                                    Browse Events
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose UniEvents?</h2>
                            <p className="text-lg text-gray-600">Everything you need to manage and discover campus events</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6">
                                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <Calendar className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Easy Event Discovery</h3>
                                <p className="text-gray-600">Find events that match your interests with powerful search and filtering.</p>
                            </div>
                            <div className="text-center p-6">
                                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <Users className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Connect & Network</h3>
                                <p className="text-gray-600">Meet like-minded students and build lasting connections through events.</p>
                            </div>
                            <div className="text-center p-6">
                                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <Plus className="h-8 w-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Create Events</h3>
                                <p className="text-gray-600">Organize your own events and build a community around your interests.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Calendar className="h-8 w-8 text-blue-600 mr-2" />
                            <span className="text-xl font-bold text-gray-900">UniEvents</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost">Dashboard</Button>
                            <Link to="/create-event">
                                <Button className="bg-blue-600 hover:bg-blue-700">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Create Event
                                </Button>
                            </Link>
                            <Button variant="outline" onClick={() => setIsLoggedIn(false)}>Logout</Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Events</h1>
                    <p className="text-gray-600">Discover and join amazing events happening on campus</p>
                </div>

                {/* Search and Filters */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <Input
                                    placeholder="Search events..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={selectedCategory === category ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedCategory(category)}
                                    className="capitalize"
                                >
                                    {category === 'all' ? 'All Events' : category}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Events Grid */}
                <div className="grid lg:grid-cols-2 gap-6">
                    {filteredEvents.map((event) => (
                        <Card key={event.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <Badge className={getCategoryColor(event.category)}>
                                        {event.category}
                                    </Badge>
                                    <span className="text-sm text-gray-500">{event.organizer}</span>
                                </div>
                                <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                                <CardDescription className="text-gray-600">
                                    {event.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center text-gray-600">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        <span>{new Date(event.date).toLocaleDateString()} at {event.time}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <MapPin className="h-4 w-4 mr-2" />
                                        <span>{event.location}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Users className="h-4 w-4 mr-2" />
                                        <span>{event.attendees}/{event.maxAttendees} attendees</span>
                                    </div>
                                    <div className="pt-4 flex justify-between items-center">
                                        <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                                            <div
                                                className="bg-blue-600 h-2 rounded-full"
                                                style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                                            ></div>
                                        </div>
                                        <Button
                                            className="bg-blue-600 hover:bg-blue-700 flex-shrink-0"
                                            disabled={event.attendees >= event.maxAttendees}
                                        >
                                            {event.attendees >= event.maxAttendees ? 'Full' : 'Join Event'}
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredEvents.length === 0 && (
                    <div className="text-center py-12">
                        <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
                        <p className="text-gray-600">Try adjusting your search or filters to find events.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Index;
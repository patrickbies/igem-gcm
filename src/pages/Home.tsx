import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ExternalLink,
  Microscope,
  FlaskConical,
} from "lucide-react";

const day1Schedule = [
  { time: "8:30 AM", activity: "Registration & Refreshments" },
  { time: "9:15 AM", activity: "Opening Remarks" },
  { time: "9:30 AM", activity: "Keynote #1 | Dr. Marissa Lithopoulos" },
  { time: "10:30 AM", activity: "Activity | iGEM BINGO" },
  { time: "11:00 AM", activity: "Presentation | Dr. Jérôme Waldispühl" },
  { time: "11:20 AM", activity: "Workshop | Synbio Tools with BioCyc" },
  { time: "12:15 PM", activity: "Lunch & Networking" },
  { time: "1:15 PM", activity: "Keynote #2 | Braden Tierney" },
  { time: "2:15 PM", activity: "Activity | Mindmeld" },
  { time: "2:45 PM", activity: "Panel #1 | Beyond the Bachelors" },
  { time: "4:00 PM", activity: "Activity | Synbio Jeopardy" },
  { time: "4:30 PM", activity: "Closing Remarks" },
];

const day2Schedule = [
  { time: "8:30 AM", activity: "Check-In & Refreshments" },
  { time: "9:15 AM", activity: "Opening remarks" },
  { time: "9:30 AM", activity: "Activity | iGEM Kahoot" },
  { time: "10:00 AM", activity: "Pitch Competition | Group A" },
  { time: "11:45 AM", activity: "Lunch & Networking" },
  { time: "1:00 PM", activity: "Pitch Competition | Group B" },
  { time: "2:20 PM", activity: "Judging Break & Networking" },
  { time: "2:45 PM", activity: "Pitch Competition | Group C" },
  { time: "4:50 PM", activity: "Activity | Escape the Article" },
  { time: "5:30 PM", activity: "Panel #2 | iGEMers for Life!" },
  { time: "6:30 PM", activity: "Awards & Final Remarks" },
];

const Schedule = ({
  events,
}: {
  events: { time: string; activity: string; isPanel?: boolean }[];
}) => {
  return (
    <div className="grid gap-3">
      {events.map((event, index) => (
        <div
          key={index}
          className={`flex justify-between items-center ${event.isPanel && ""}`}
        >
          <span className="font-medium">{event.time}</span>
          <span className="text-sm text-gray-600">{event.activity}</span>
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <a href="#">
          <img src="igem-gcm/gcmlogo.PNG" alt="iGEM GCM 2025" className="h-16" />
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            href="#about"
            className="text-sm font-medium hover:text-green-600 transition-colors scroll-smooth"
          >
            About
          </a>
          <a
            href="#schedule"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            Schedule
          </a>
          <a
            href="#speakers"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            Speakers
          </a>
          <a
            href="#panels"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            Panels
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full h-[calc(100vh-4rem)] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Badge variant="secondary" className="mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                August 9-10, 2025
              </Badge>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent pb-8">
                  The Great Canadian Meetup 2025
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  13 teams. 2 days. One shared vision. Canada’s synthetic
                  biology future starts here.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="#schedule">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <Calendar className="w-4 h-4 mr-2" />
                    View the Schedule
                  </Button>
                </a>
                <a href="https://igem.org/">
                  <Button variant="outline" size="lg">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn About iGEM
                  </Button>
                </a>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  STEM complex | 150 Louis-Pasteur Private | University of
                  Ottawa
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />2 Days of Innovation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full h-[calc(100vh-4rem)] content-center py-12 md:py-24 lg:py-32 bg-white scroll-mt-16"
        >
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What is the Great Canadian Meetup?
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  An annual gathering of iGEM teams from across Canada, this
                  meetup brings together students eager to share their projects,
                  connect with peers and learn from experts in the field, all in
                  a setting that captures the spirit of the Grand Jamboree.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Microscope className="w-5 h-5 text-green-600" />
                      Research Presentations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      It's competition time! Teams will pitch their projects and
                      research findings to a panel of judges - a perfect
                      practice for the Jamboree.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <FlaskConical className="w-5 h-5 text-blue-600" />
                      Workshops
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Learn from the best and boost your research through
                      hands-on training in lab techniques and project
                      development.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section
          id="schedule"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 scroll-mt-16"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Event Schedule
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Two days packed with insights, collaborations and learning
                  opportunities!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-green-600" />
                    Day 1 - August 9, 2025
                  </CardTitle>
                  <CardDescription>
                    Presentations, workshops, and networking opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Schedule events={day1Schedule} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    Day 2 - August 10, 2025
                  </CardTitle>
                  <CardDescription>
                    Activites, pitch competitions, and awards ceremony
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Schedule events={day2Schedule} />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section
          id="speakers"
          className="w-full py-12 md:py-24 lg:py-32 bg-white scroll-mt-16"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Featured Speakers
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn from industry experts and accomplished researchers in
                  synthetic biology.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">ML</span>
                  </div>
                  <CardTitle>
                    <a href="https://www.drmarissalithopoulos.com/">
                      Dr. Marissa Lithopoulos
                    </a>
                  </CardTitle>
                  <CardDescription>UBC</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Born and raised in Ottawa, Marissa acquired her BSc in
                    biomedical science with a minor in philosophy at the
                    University of Ottawa. She then went on to earn her PhD in
                    Cellular and Molecular Medicine, supervised by Dr. Bernard
                    Thébaud. As a postdoctoral research fellow at the Hospital
                    for Sick Children in Toronto, then at UBC, she investigates
                    brain stem cells during development and how we can use this
                    knowledge to support preterm babies. She's also shaping the
                    future of stem cell policy through her work with the
                    University of Regina. But Marissa doesn't stop at the lab
                    bench - she is also the founder of Science, Stand-Up and
                    Song, a unique outreach initiative that blends music, comedy
                    and science to make research more inclusive and engaging.
                    Whether in the lab or on the stage, Marissa's all about
                    making science accessible and fun!
                    <a href="https://www.drmarissalithopoulos.com/" className="ml-1 text-blue-600 hover:underline">
                      Learn more
                    </a>
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">BT</span>
                  </div>
                  <CardTitle>
                    <a href="https://www.bradentierney.com/">
                      Dr. Braden Tierney
                    </a>
                  </CardTitle>
                  <CardDescription>Harvard</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    With a BSc in Biology and Economics from Duke University,
                    and a PhD in Biological and Biomedical Sciences from Harvard
                    Medical School, Braden has experience in working at the
                    intersection of different fields. As executive director of
                    the Two Frontiers project and researcher at Harvard Medical
                    School, he is set on exploring the microbial world, from the
                    Earth's deepest crevices to the edges of space. His work
                    blends AI, genomics and extreme environment expeditions to
                    tackle global challenges like carbon capture, coral reef
                    preservation and pandemic preparedness. Whether he's
                    building wastewater pathogen trackers, engineering
                    space-ready bioreactors or decoding the microbiome in quest
                    of new therapeutics, Braden is pushing the boundaries of
                    biology and biotechnology - all while trail running, scuba
                    diving and hunting down the best Waffle Houses in town.
                    <a href="https://www.bradentierney.com/" className="ml-1 text-blue-600 hover:underline">Learn more</a>
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">JW</span>
                  </div>
                  <CardTitle>
                    <a href="https://www.cs.mcgill.ca/~jeromew/">
                      Dr. Jérôme Waldispühl
                    </a>
                  </CardTitle>
                  <CardDescription>McGill</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    With a BSc in Mathematics from the University of Nice and
                    Sophia-Antipolis and an MSc in Computer Science from the
                    University of Paris VII, Jérôme Waldispühl has long been
                    bridging the worlds of logic and life. After earning his PhD
                    from École Polytechnique in France and completing
                    postdoctoral training in biology at Boston College, he took
                    his interdisciplinary passion to McGill University, where
                    he's now a professor of computer science. Jérôme's research
                    focuses on RNA 3D structure, small molecule interactions,
                    and bioinformatics — powered by algorithms, AI, and a deep
                    curiosity about how biology works. He's also the creator of
                    international citizen science games like Phylo, Colony B,
                    and Borderlands Science, which turn scientific problems into
                    playable missions for millions worldwide. Outside the lab,
                    he's an avid cyclist, skier, and sci-fi fan. Whether
                    developing tools to decode RNA or reimagining how we
                    interact with science, Jérôme is always pushing boundaries —
                    in research and beyond.
                    <a href="https://www.cs.mcgill.ca/~jeromew/" className="ml-1 text-blue-600 hover:underline">Learn more</a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Panels Section */}
        <section
          id="panels"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 scroll-mt-16"
        >
          <div className="container px-4 md:px-6 mx-auto">
            {/* Section Heading */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Panel Discussions
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Engage with leaders in their fields as they share insights and
                  experiences.
                </p>
              </div>
            </div>

            {/* Panels Grid */}
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {/* Panel 1 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="w-10 h-10 text-green-600" />
                    Panel 1 - Beyond the Bachelor's: Careers in Biotechnology
                    &amp; Synthetic Biology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Dr. Marissa Lithopoulos</li>
                    <li>Dr. Jérôme Waldispühl</li>
                    <li>
                      Dr. Daniel Giguere - Founder &amp; CEO of Flow Genomics
                    </li>
                    <li>
                      Dr. Kashif Khan - Head of the Cell Biology Department at
                      Dalraida Drug Discovery &amp; Member of SynBio Canada
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Panel 2 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="w-10 h-10 text-blue-600" />
                    Panel 2 - iGEMers for Life: How to Stay Connected After the
                    Jamboree
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>
                      Dr. Brian Ingalls - uWaterloo iGEM PI &amp; iGEM UFT
                      2005/2006 member
                    </li>
                    <li>
                      Dan Voicu - iGEM McGill Co-Lead 2023 (Grand Prize Winner)
                    </li>
                    <li>Dr. Stéphanie Pontier - Outaouais iGEM PI</li>
                    <li>
                      Mia Bhatia - North American iGEM Ambassador &amp; iGEM
                      McGill member 2024
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white h-16">
        <img src="igem-gcm/gcmlogo.PNG" alt="iGEM GCM 2025" className="h-12" />
        <p className="text-xs text-gray-600 sm:ml-auto">
          © 2025 University of Ottawa iGEM Team. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;

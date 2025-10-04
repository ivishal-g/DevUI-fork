
export interface SnippetOptions {
  variation?: "default" | "withIcon" | "alternateColor" | "responsive" | "compact" | "withDescription";
}
export function generateComponentSnippet(componentId: string, defaultCode: string, options: SnippetOptions = {}): string {
  const { variation = "default" } = options;

  if (variation === "default") {
    return defaultCode;
  }

  const variations: Record<string, Record<string, string>> = {
    button: {
      withIcon: `import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function ButtonDemo() {
  return (
    <div className="flex gap-4">
      <Button variant="default" className="flex items-center gap-2">
        <Star className="h-4 w-4" /> Click Me
      </Button>
      <Button variant="secondary" className="flex items-center gap-2">
        <Star className="h-4 w-4" /> Secondary
      </Button>
    </div>
  );
}`,
      alternateColor: `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex gap-4">
      <Button variant="default" className="bg-green-600 text-white">Click Me</Button>
      <Button variant="secondary" className="bg-purple-600 text-white">Secondary</Button>
    </div>
  );
}`,
      responsive: `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Button variant="default">Click Me</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  );
}`,
    },
    input: {
      withPlaceholder: `import { Input } from "@/components/ui/input";

export function InputDemo() {
  return (
    <div className="space-y-4">
      <Input placeholder="Enter your email..." type="email" className="w-full md:w-1/2" />
      <Input placeholder="Password" type="password" className="w-full md:w-1/2" />
    </div>
  );
}`,
      responsive: `import { Input } from "@/components/ui/input";

export function InputDemo() {
  return (
    <div className="space-y-4 w-full md:max-w-md">
      <Input placeholder="Enter your email..." type="email" />
      <Input placeholder="Password" type="password" />
    </div>
  );
}`,
    },
    badge: {
      alternateColor: `import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex gap-2">
      <Badge className="bg-blue-600 text-white">Default</Badge>
      <Badge variant="secondary" className="bg-teal-600 text-white">Secondary</Badge>
      <Badge variant="destructive" className="bg-red-600 text-white">Destructive</Badge>
      <Badge variant="outline" className="border-green-600 text-green-600">Outline</Badge>
    </div>
  );
}`,
      responsive: `import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}`,
    },
    select: {
      withIcon: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-full flex items-center gap-2">
        <SelectValue placeholder="Select an option" />
        <ChevronDown className="h-4 w-4" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  );
}`,
      alternateColor: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-full bg-blue-600 text-white">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent className="bg-gray-800 text-white">
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  );
}`,
      responsive: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SelectDemo() {
  return (
    <div className="w-full md:max-w-xs">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`,
    },
    dialog: {
      withIcon: `import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Button } from "@/components/ui/dialog";
import { Info } from "lucide-react";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Info className="h-4 w-4" /> Open Dialog
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>This is a dialog example.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`,
      alternateColor: `import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Button } from "@/components/ui/dialog";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-teal-600 text-white">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white">
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>This is a dialog example.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`,
      responsive: `import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Button } from "@/components/ui/dialog";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[90vw] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>This is a dialog example.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`,
    },
    alertdialog: {
      withIcon: `import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, Button } from "@/components/ui/alert-dialog";
import { Info } from "lucide-react";

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Info className="h-4 w-4" /> Open Dialog
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>This is an alert example.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`,
      alternateColor: `import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, Button } from "@/components/ui/alert-dialog";

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="bg-red-600 text-white">Open Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-gray-800 text-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>This is an alert example.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`,
      responsive: `import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, Button } from "@/components/ui/alert-dialog";

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-full max-w-[90vw] sm:max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>This is an alert example.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`,
    },
    drawer: {
      withIcon: `import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, Button } from "@/components/ui/drawer";
import { Info } from "lucide-react";

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Info className="h-4 w-4" /> Open Drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>This is a drawer example.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`,
      alternateColor: `import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, Button } from "@/components/ui/drawer";

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="bg-purple-600 text-white">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="bg-gray-800 text-white">
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>This is a drawer example.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`,
      responsive: `import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, Button } from "@/components/ui/drawer";

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="w-full max-w-[90vw] sm:max-w-sm">
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>This is a drawer example.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`,
    },
    fileupload: {
      compact: `import { FileUpload } from "@/components/ui/file-upload";

export function FileUploadDemo() {
  const handleFileSelect = (files: File[]) => {
    console.log("Selected files:", files);
  };

  const handleFileUpload = async (files: File[]) => {
    console.log("Uploading files:", files);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <FileUpload
      variant="compact"
      accept="image/*,.pdf"
      multiple={true}
      maxFiles={2}
      maxSize={2 * 1024 * 1024}
      onFileSelect={handleFileSelect}
      onFileUpload={handleFileUpload}
      showProgress={true}
    />
  );
}`,
      responsive: `import { FileUpload } from "@/components/ui/file-upload";

export function FileUploadDemo() {
  const handleFileSelect = (files: File[]) => {
    console.log("Selected files:", files);
  };

  const handleFileUpload = async (files: File[]) => {
    console.log("Uploading files:", files);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <div className="w-full max-w-md md:max-w-lg">
      <FileUpload
        accept="image/*,.pdf"
        multiple={true}
        maxFiles={3}
        maxSize={5 * 1024 * 1024}
        onFileSelect={handleFileSelect}
        onFileUpload={handleFileUpload}
      />
    </div>
  );
}`,
    },
    toast: {
      withDescription: `import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function ToastDemo() {
  return (
    <div className="flex gap-4">
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Monday, January 3rd at 6:00pm",
          })
        }
      >
        Show Toast
      </Button>
    </div>
  );
}`,
    },
    sonner: {
      withDescription: `import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function SonnerDemo() {
  return (
    <div className="flex gap-4">
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Monday, January 3rd at 6:00pm",
          })
        }
      >
        Show Toast
      </Button>
    </div>
  );
}`,
    },
    menubar: {
      alternateColor: `import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from "@/components/ui/menubar";

export function MenuBarDemo() {
  return (
    <Menubar className="bg-blue-600 text-white">
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent className="bg-gray-800 text-white">
          <MenubarItem>New Tab</MenubarItem>
          <MenubarItem>Open...</MenubarItem>
          <MenubarItem disabled>Save As...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Exit</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent className="bg-gray-800 text-white">
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`,
      responsive: `import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from "@/components/ui/menubar";

export function MenuBarDemo() {
  return (
    <div className="w-full md:w-auto">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>Open...</MenubarItem>
            <MenubarItem disabled>Save As...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Exit</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}`,
    },
    sidebar: {
      responsive: `import { Sidebar, SidebarProvider, SidebarTrigger, SidebarContent, MenuItem } from "@/components/ui/sidebar";
import { Home } from "lucide-react";

const navigationItems: MenuItem[] = [
  { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" />, href: '/' },
];

export function SidebarDemo() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full md:w-64">
        <Sidebar items={navigationItems} />
        <SidebarContent>
          <header className="flex items-center gap-4 p-4 border-b">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold">My App</h1>
          </header>
          <main className="flex-1 p-6">
            <h2 className="text-2xl font-bold">Welcome!</h2>
            <p>Your main content goes here.</p>
          </main>
        </SidebarContent>
      </div>
    </SidebarProvider>
  );
}`,
    },
  };

  return variations[componentId]?.[variation] || defaultCode;
}